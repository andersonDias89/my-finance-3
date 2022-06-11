import { Control, Controller, FieldValues } from "react-hook-form"
import InputMask from "react-input-mask"



export const InputCpf = ({ type = "text", name, control, ...rest }) => {
    return (
        <Controller name={name} control={control} render={({field: {onChange, value}}) => (
            <InputMask mask='999.999.999-99' onChange={onChange} value={value}>
                <input type={type} className='w-full'  {...rest} />
            </InputMask>
        )} />
    )
}