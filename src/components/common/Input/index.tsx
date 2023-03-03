import * as Type from '../../../types/form'
import * as INPUT from '../../../constants/form'

const Input = ({ name, register, type = INPUT.TYPE.TEXT }: Type.InputProps) => {
    return (
        <input
            className="w-full rounded-md border border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            name={name}
            type={type}
            {...register()}
        />
    )
}

export default Input
