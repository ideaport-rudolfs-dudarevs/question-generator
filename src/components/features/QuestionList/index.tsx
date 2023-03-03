import { Questions } from '../../../types/questionGenerator'

const QuestionList = ({
    questions,
    topics
}: {
    questions: Questions[]
    topics: string[]
}) => {
    return (
        <div>
            <p className="my-6 text-center text-4xl font-bold">
                Generated {questions.length}/{topics.length}
            </p>
            {questions.map((item, i) => {
                return (
                    <div key={`${item.topic}-${i}`}>
                        <h2 className="mt-7 mb-3 text-xl font-bold">
                            {item.topic}
                        </h2>
                        <ol className="list-decimal">
                            {item.questions.map((text, z) => {
                                return (
                                    <li key={`${i}-${z}`} className="mb-2">
                                        {text}
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                )
            })}
        </div>
    )
}

export default QuestionList
