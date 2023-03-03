import { useState, useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form'

import Input from '../../common/Input'
import InputButton from '../../common/InputButton'
import Button from '../../common/Button'
import TopicTags from '../TopicTags'
import QuestionList from '../QuestionList'
import { Questions } from '../../../types/questionGenerator'
import { defaultTopics } from '../../../constants/questionGenerator'

import { Configuration, OpenAIApi } from 'openai'
import Counter from '../../common/Counter'

// API KEY, UNSAFE!
const configuration = new Configuration({
    apiKey: 'YOUR_API_KEY'
})
const openai = new OpenAIApi(configuration)

const QuestionGenerator = () => {
    const {
        register,
        getValues,
        resetField,
        formState: { errors }
    } = useForm()
    const [topics, setTopics] = useState<string[]>([])
    const [questions, setQuestions] = useState<Questions[]>([])
    const [count, setCount] = useState<number>(10)

    useEffect(() => {
        const topics = localStorage.getItem('topics')

        if (topics) {
            setTopics(JSON.parse(topics))
        } else {
            localStorage.setItem('topics', JSON.stringify(defaultTopics))
        }
    }, [])

    useEffect(() => {
        resetField('topic')
    }, [topics])

    useEffect(() => {})

    const handleNewTopic = useCallback(() => {
        const topic = getValues('topic')

        topic &&
            setTopics((prevState) => {
                const newState = [...prevState, topic]
                localStorage.setItem('topics', JSON.stringify(newState))

                return newState
            })
    }, [])

    const removeTopic = useCallback((index: number) => {
        setTopics((prevState) => {
            const newState = [...prevState]
            newState.splice(index, 1)
            localStorage.setItem('topics', JSON.stringify(newState))

            return newState
        })
    }, [])

    const countChange = useCallback((operation: string) => {
        switch (operation) {
            case 'increment':
                setCount((prevState) => prevState + 1)
                break
            case 'decrement':
                setCount((prevState) =>
                    prevState > 1 ? prevState - 1 : prevState
                )
                break
        }
    }, [])

    const generateQuestions = async () => {
        setQuestions([])
        for (const topic of topics) {
            const topicQuestions = await fetchOpenAiCompletions(topic)

            setQuestions((prevState) => [
                ...prevState,
                {
                    topic: topic,
                    questions: topicQuestions
                }
            ])
        }
    }

    const fetchOpenAiCompletions = async (topic: string) => {
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `A frequently asked question to an airline about ${topic} without an answer.`,
            n: count
        })

        const questions: string[] = []

        response.data.choices.forEach((item) => {
            const formatted = item.text?.replace(
                /Q.|\n\nQ:|\n\n|\n\nA:|\nA:|A:|\nA:.*/gi,
                ''
            )
            formatted && questions.push(formatted)
        })

        return questions
    }

    const resetDefaultTopics = useCallback(() => {
        setTopics(() => {
            localStorage.setItem('topics', JSON.stringify(defaultTopics))
            return defaultTopics
        })
    }, [])

    const clearTopics = useCallback(() => {
        setTopics(() => {
            localStorage.removeItem('topics')
            return []
        })
    }, [])

    return (
        <form>
            <div className="mt-12 flex flex-col items-center">
                <div className="flex gap-5">
                    <div className="relative w-96">
                        <Input
                            name="topic"
                            register={() => register('topic', {})}
                        />
                        <InputButton
                            text="Add topic"
                            handleClick={handleNewTopic}
                        />
                    </div>
                </div>
                <div className="mt-3 mb-6">
                    <p className="text-lg font-bold">Questions per topic</p>
                    <Counter handleCountChange={countChange} count={count} />
                </div>
                <TopicTags topics={topics} handleRemoveTopic={removeTopic} />
                <div className="flex flex-col items-center">
                    <div className="my-5 flex flex-col items-center gap-4">
                        <div className="flex gap-4">
                            <Button
                                handleClick={resetDefaultTopics}
                                text="Reset to default topics"
                            />
                            <Button
                                handleClick={clearTopics}
                                text="Clear topics"
                            />
                        </div>
                    </div>
                    <Button
                        text="Generate Questions"
                        handleClick={generateQuestions}
                    />
                </div>
                <QuestionList questions={questions} topics={topics} />
            </div>
        </form>
    )
}

export default QuestionGenerator
