import * as Types from '../../../types/form'
import * as FORM from '../../../constants/form'

const InputButton = ({
    handleClick,
    text,
    type = FORM.BTN_TYPE.BUTTON
}: Types.ButtonProps) => {
    return (
        <button
            className="absolute right-0 h-full rounded rounded-bl-none rounded-tl-none bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
            onClick={handleClick}
            type={type}
        >
            {text}
        </button>
    )
}

export default InputButton
