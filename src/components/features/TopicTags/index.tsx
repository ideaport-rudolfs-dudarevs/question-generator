const TopicTags = ({
    topics,
    handleRemoveTopic
}: {
    topics: string[]
    handleRemoveTopic: (index: number) => void
}) => {
    return (
        <div className="flex max-w-5xl flex-wrap justify-center gap-2">
            {topics.map((topic, index) => {
                return (
                    <div
                        className="flex w-max select-none items-center rounded-full bg-green-300 px-3"
                        key={`topic-${index}`}
                    >
                        <span className="mb-[2px]">{topic}</span>
                        <div
                            className="ml-2 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full hover:bg-green-200"
                            onClick={() => handleRemoveTopic(index)}
                        >
                            <svg
                                fill="#000000"
                                height="8px"
                                width="8px"
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 460.775 460.775"
                            >
                                <path
                                    d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                                        c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                                        c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                                        c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                                        l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                                        c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
                                />
                            </svg>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TopicTags
