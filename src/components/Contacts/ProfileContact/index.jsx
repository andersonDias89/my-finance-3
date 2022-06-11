import { IoMdContact } from "react-icons/io"
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'


export const ProfileContact = () => {
    return (
        <div className="w-1/2 bg-box rounded-md px-5">
            <header className="w-full h-20 border-b-2 border-line relative flex items-center justify-between">

                <div className="flex justify-start text-2xl text-blueLight items-center space-x-2">
                    <IoMdContact />
                    <h2 className="text-xs text-slate-300 font-black">Maria da Silva</h2>
                </div>
                <div className="flex space-x-2">
                    <a className="text-gray-600 hover:text-gray-500 text-lg cursor-pointer"><FiEdit /></a>
                    <a className="text-red-900 hover:text-red-800 text-lg cursor-pointer"><RiDeleteBin6Line /></a>
                </div>

                {/* <div className="absolute left-2 bottom-0 text-sm space-x-2 text-gray-400">
                    <button type="button">Geral</button>
                    <button type="button">Atividades</button>
                </div> */}

            </header>

            <div className="space-y-1  p-4   border-b-2 border-line">

                <dl className="flex justify-between text-xs bg-box rounded-lg p-2">
                    <dt className="text-gray-600 w-2/5">Nome:</dt>
                    <dd className="text-slate-200 w-3/5 ">Maria da Silva Morais de Souza</dd>
                </dl>

                <dl className="flex justify-between text-xs bg-box rounded-lg p-2">
                    <dt className="text-gray-600 w-2/5">E-mail:</dt>
                    <dd className="text-slate-200 w-3/5 ">mariadasilva@gmail.com</dd>
                </dl>

                <dl className="flex justify-between text-xs bg-box rounded-lg p-2">
                    <dt className="text-gray-600 w-2/5">CPF:</dt>
                    <dd className="text-slate-200 w-3/5 ">084.458.785-85</dd>
                </dl>

                <dl className="flex justify-between text-xs bg-box rounded-lg p-2">
                    <dt className="text-gray-600 w-2/5">RG:</dt>
                    <dd className="text-slate-200 w-3/5 ">001.542.845</dd>
                </dl>

                <dl className="flex justify-between text-xs bg-box rounded-lg p-2">
                    <dt className="text-gray-600 w-2/5">Celular:</dt>
                    <dd className="text-slate-200 w-3/5 ">84 99637-8475</dd>
                </dl>

                <dl className="flex justify-between text-xs bg-box rounded-lg p-2">
                    <dt className="text-gray-600 w-2/5">Endereço:</dt>
                    <dd className="text-slate-200 w-3/5 ">R. Maracujá, Bosque Verde 111</dd>
                </dl>

                <dl className="flex justify-between text-xs bg-box rounded-lg p-2">
                    <dt className="text-gray-600 w-2/5">Estado:</dt>
                    <dd className="text-slate-200 w-3/5 ">Rio Grande do Norte</dd>
                </dl>

                <dl className="flex justify-between text-xs bg-box rounded-lg p-2">
                    <dt className="text-gray-600 w-2/5">Cidade:</dt>
                    <dd className="text-slate-200 w-3/5 ">Natal</dd>
                </dl>

            </div>

            <dl className="text-xs bg-box p-2 mt-3">
                <dt className="text-gray-600">Descrição:</dt>
                <dd className="text-slate-200 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia rerum corporis, animi voluptatum, perspiciatis soluta placeat dolorem commodi nostrum vel dolor earum. Officia quam tempore ducimus sed ex dicta rerum.</dd>
            </dl>


        </div>
    )
}