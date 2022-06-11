import { FieldValues, UseFormRegister, Controller, Control } from "react-hook-form"
import InputMask from 'react-input-mask'



export const InputPhone = ({ type = "text", name, control, ...rest }) => {
    return (
        <Controller name={name} control={control} render={({field: {onChange, value}}) => (
            <InputMask mask='(99) 9999-9999' onChange={onChange} value={value}>
                <input type={type} className='w-full'  {...rest} />
            </InputMask>
        )} />
          
    )
}