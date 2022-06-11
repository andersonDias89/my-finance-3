import { FieldValues, UseFormRegister } from "react-hook-form"



export const InputFormText = ({ type = "text", name, register= () => {
    return {
      name: '',
      onBlur: async () => undefined,
      onChange: async () => undefined,
      ref: () => null
    }
  }, ...rest }) => {
    return (
        <input 
        type={type} 
        {...register(name)} 
        {...rest}
        />
    )
}