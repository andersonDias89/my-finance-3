import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { HiUserAdd } from "react-icons/hi"
import { InputFormText } from "../Inputs/InputFormText"
import { InputCellPhone } from "../Inputs/InputCellPhone";
import { InputCpf } from "../Inputs/InputCpf";
import { InputRg } from "../Inputs/InputRg";
import { InputPhone } from "../Inputs/InputPhone";
import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext";



const signInFormSchema = yup.object().shape({
    nome: yup
        .string()
        .required("Nome obrigatório"),
    estado: yup
        .string()
        .required("Estado obrigatório"),
    cidade: yup
        .string()
        .required("Cidade obrigatória"),
    endereco: yup
        .string()
        .required("Endereço obrigatório"),
    email: yup
        .string()
        .required("E-mail obrigatório")
        .email("O campo precisa ser um email válido"),
    cellPhone: yup
        .string()
        .required("Número obrigatório"),
    phone: yup
        .string()
        .required("Número obrigatório"),
    cpf: yup
        .string()
        .required("CPF obrigatório").test('equal', 'Complete todos os campos', (val) => {
            return val?.toString().substring(13, 15) !== '_'
        }),
    rg: yup
        .string()
        .required("Rg obrigatório").test('equal', 'Complete todos os campos', (val) => {
            return val?.toString().substring(9, 13) !== '_'
        })
});

export const FormAddContacts = () => {
    const { register, handleSubmit, control, formState } = useForm({
        resolver: yupResolver(signInFormSchema)
    });

    const {setName, setEmail} = useContext(ContactContext)


    const handleSignIn = (data) => {
        
        setName(data.nome)
        setEmail(data.email)
    };

    return (
        <form
            onSubmit={handleSubmit(handleSignIn)}
            className='w-4/5 m-auto'>
            <div>
                <label htmlFor="nome" className='text-sm text-gray-500'>Nome</label>
                <div className="bg-primary w-full h-7 rounded-lg flex overflow-hidden">
                    <InputFormText
                        placeholder="Digite o seu nome"
                        name="nome"
                        register={register}
                        className="w-5/6 bg-transparent placeholder:text-gray-700 placeholder:text-xs text-xs p-3 text-slate-200 h-full outline-none"
                    />
                </div>
                {formState.errors.nome && (<p className="text-red-700 text-xs py-2">{formState.errors.nome.message}</p>)}
            </div>

            <div>
                <label htmlFor="email" className='text-sm text-gray-500'>E-mail</label>
                <div className="bg-primary w-full h-7 rounded-lg flex overflow-hidden">
                    <InputFormText
                        type="email"
                        className="w-5/6 bg-transparent placeholder:text-gray-700 placeholder:text-xs text-xs p-3 text-slate-200 h-full outline-none"
                        placeholder="Digite o seu e-mail"
                        name="email"
                        register={register}
                    />

                </div>
                {formState.errors.email && (<p className="text-red-700 text-xs py-2">{formState.errors.email.message}</p>)}
            </div>

            <div className='grid grid-cols-2 gap-2'>
                <div>
                    <label htmlFor="text" className='text-sm text-gray-500'>CPF:</label>
                    <div className="bg-primary w-full h-7 rounded-lg flex overflow-hidden">
                        <InputCpf
                            className="w-5/6 bg-transparent placeholder:text-gray-700 placeholder:text-xs text-xs p-3 text-slate-200 h-full outline-none"
                            placeholder="084.000.458-85"
                            control={control}
                            name="cpf"
                        />

                    </div>
                    {formState.errors.cpf && (<p className="text-red-700 text-xs py-2">{formState.errors.cpf.message}</p>)}
                </div>

                <div>
                    <label htmlFor="text" className='text-sm text-gray-500'>RG:</label>
                    <div className="bg-primary w-full h-7 rounded-lg flex overflow-hidden">
                        <InputRg
                            type="text"
                            className="w-5/6 bg-transparent placeholder:text-gray-700 placeholder:text-xs text-xs p-3 text-slate-200 h-full outline-none"
                            placeholder="002.000-85"
                            control={control}
                            name="rg"
                        />
                    </div>
                    {formState.errors.rg && (<p className="text-red-700 text-xs py-2">{formState.errors.rg.message}</p>)}
                </div>
            </div>

            <div>
                <label htmlFor="endereço" className='text-sm text-gray-500'>Endereço:</label>
                <div className="bg-primary w-full h-7 rounded-lg flex overflow-hidden">
                    <InputFormText
                        className="w-5/6 bg-transparent placeholder:text-gray-700 placeholder:text-xs text-xs p-3 text-slate-200 h-full outline-none"
                        placeholder="Digite o seu endereço"
                        name="endereco"
                        register={register}
                    />
                </div>
                {formState.errors.endereco && (<p className="text-red-700 text-xs py-2">{formState.errors.endereco.message}</p>)}

            </div>

            <div className='grid grid-cols-2 gap-2'>
                <div>
                    <label htmlFor="cidade" className='text-sm text-gray-500'>Cidade:</label>
                    <div className="bg-primary w-full h-7 rounded-lg flex overflow-hidden">
                        <InputFormText
                            className="w-5/6 bg-transparent placeholder:text-gray-700 placeholder:text-xs text-xs p-3 text-slate-200 h-full outline-none"
                            placeholder="Digite a cidade"
                            name="cidade"
                            register={register}
                        />
                    </div>
                    {formState.errors.cidade && (<p className="text-red-700 text-xs py-2">{formState.errors.cidade.message}</p>)}

                </div>

                <div>
                    <label htmlFor="estado" className='text-sm text-gray-500'>Estado:</label>
                    <div className="bg-primary w-full h-7 rounded-lg flex overflow-hidden">
                        <InputFormText
                            className="w-5/6 bg-transparent placeholder:text-gray-700 placeholder:text-xs text-xs p-3 text-slate-200 h-full outline-none"
                            placeholder="Digite o estado"
                            name="estado"
                            register={register}
                        />
                    </div>
                    {formState.errors.estado && (<p className="text-red-700 text-xs py-2">{formState.errors.estado.message}</p>)}

                </div>


            </div>

            <div className='grid grid-cols-2 gap-2'>
                <div>
                    <label htmlFor="cellPhone" className='text-sm text-gray-500'>Celular:</label>
                    <div className="bg-primary w-full h-7 rounded-lg flex overflow-hidden">
                        <InputCellPhone
                            control={control}
                            name="cellPhone"
                            className="w-5/6 bg-transparent placeholder:text-gray-700 placeholder:text-xs text-xs p-3 text-slate-200 h-full outline-none" placeholder="84 99637-4284"
                        />
                    </div>
                    {formState.errors.cellPhone && (<p className="text-red-700 text-xs py-2">{formState.errors.cellPhone.message}</p>)}

                </div>

                <div>
                    <label htmlFor="phone" className='text-sm text-gray-500'>Telefone:</label>
                    <div className="bg-primary w-full h-7 rounded-lg flex overflow-hidden">
                        <InputPhone
                            control={control}
                            name="phone"
                            className="w-5/6 bg-transparent placeholder:text-gray-700 placeholder:text-xs text-xs p-3 text-slate-200 h-full outline-none" placeholder="84 99637-4284"
                        />
                    </div>
                    {formState.errors.phone && (<p className="text-red-700 text-xs py-2">{formState.errors.phone.message}</p>)}
                </div>


            </div>


            <div className='flex items-center justify-start mt-4'>
                <div className="w-1/2 h-8 overflow-hidden rounded-lg">
                    <button
                        type='submit'
                        className="space-x-1 w-full h-full bg-blueLight hover:bg-blueLightHover font-black text-slate-100 flex items-center justify-center">
                        <span className='text-lg'><HiUserAdd /></span>
                        <span className='text-sm'>Cadastrar</span>
                    </button>
                </div>
            </div>


        </form>
    )
}