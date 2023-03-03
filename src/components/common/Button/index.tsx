const Button = ({
    text,
    handleClick
}: {
    text: string
    handleClick: () => void
}) => {
    return (
        <button
            className="h-[42px] rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
            onClick={handleClick}
            type="button"
        >
            {text}
        </button>
    )
}

export default Button
