import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form'
import { useRouter } from "next/router";


import { FaCoins } from "react-icons/fa"
import { InputFormText } from "../../Inputs/InputFormText";



const signInFormSchema = yup.object().shape({
    email: yup
        .string()
        .required("Email obrigatório"),
    password: yup
        .string()
        .required("Senha obrigatória")
});

export const FormLogin = () => {
    const router = useRouter()


    const { register, handleSubmit, control, formState } = useForm({
        resolver: yupResolver(signInFormSchema)
    });


    const handleSignIn = async ({ email, password }) => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(email, password)

        router.push('/dashboard')
    };

    return (
        <div className="flex items-center justify-center h-screen px-24">
            <form
                className="bg-box h-96 w-2/6 rounded-lg p-5"
                onSubmit={handleSubmit(handleSignIn)}
            >
                <fieldset className="w-11/12 m-auto">
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <span className="text-blueLight text-5xl"><FaCoins /></span>
                        <span className="text-slate-200 font-normal">Entrar</span>

                    </div>
                    <div className="mt-4">
                        <label htmlFor="email" className="text-sm text-gray-600">E-mail</label>
                        <div className="bg-primary w-full h-7 rounded-lg flex overflow-hidden">
                            <InputFormText
                                className="w-5/6 bg-transparent placeholder:text-gray-700 placeholder:text-xs text-xs p-3 text-slate-200 h-full outline-none" placeholder="Digite o seu e-mail"
                                register={register}
                                name="email"
                            />
                        </div>
                        {formState.errors.email && (<p className="text-red-700 text-xs py-2">{formState.errors.email.message}</p>)}
                    </div>

                    <div>
                        <label htmlFor="password" className="text-sm text-gray-600">Senha</label>
                        <div className="bg-primary w-full h-7 rounded-lg flex overflow-hidden">
                            <InputFormText
                                type="password"
                                className="w-5/6 bg-transparent placeholder:text-gray-700 placeholder:text-xs text-xs p-3 text-slate-200 h-full outline-none" placeholder="Digite o seu e-mail"
                                register={register}
                                name="password"
                            />
                        </div>
                        {formState.errors.password && (<p className="text-red-700 text-xs py-2">{formState.errors.password.message}</p>)}
                    </div>

                    <div className="space-x-1 mb-3">
                        <span className="text-xs text-gray-700">Ainda não tem cadastro?</span>
                        <a href="#" className="text-gray-600 cursor-pointer text-xs hover:text-gray-500">Cadastra-se</a>
                    </div>

                    <div className="w-full h-10 overflow-hidden rounded-lg mt-6">
                        <button
                            type='submit'
                            className="space-x-1 w-full h-full bg-blueLight hover:bg-blueLightHover font-black text-slate-100 flex items-center justify-center">
                            <span className='text-sm'>Entrar</span>
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}