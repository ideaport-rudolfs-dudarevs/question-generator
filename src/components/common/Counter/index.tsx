import Button from '../Button'

const Counter = ({
    count,
    handleCountChange
}: {
    count: number
    handleCountChange: (operation: string) => void
}) => {
    return (
        <div>
            <Button
                handleClick={() => handleCountChange('decrement')}
                text="-"
            />
            <span className="mx-3 text-2xl font-bold">{count}</span>
            <Button
                handleClick={() => handleCountChange('increment')}
                text="+"
            />
        </div>
    )
}

export default Counter
