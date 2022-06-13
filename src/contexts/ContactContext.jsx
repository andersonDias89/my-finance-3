import { createContext, useEffect, useState } from "react"
import { v4 as uuid } from 'uuid'


export const ContactContext = createContext()

export function ContactContextProvider({ children }) {
    const [listContact, setListContact] = useState([
        {
            id: uuid(),
            userName: "Maria da Silva",
            userEmail: "mariadasilva@gmail.com"
        },

        {
            id: uuid(),
            userName: "Eduardo da Silva",
            userEmail: "edudu@gmail.com"
        },

        {
            id: uuid(),
            userName: "João da Silva",
            userEmail: "jojsj@gmail.com"
        },
    ])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [rg, setRg] = useState('')
    const [estado, setEstado] = useState('')
    const [cidade, setCidade] = useState('')
    const [endereco, setEndereco] = useState('')
    const [cellPhone, setCellPhone] = useState('')
    const [phone, setPhone] = useState('')


    return (

        <ContactContext.Provider value={
            {
                setName,
                setEmail,
                name,
                email,
                listContact,
                setListContact,
                cpf,
                rg,
                estado,
                cidade,
                endereco,
                cellPhone,
                phone,
                setCpf,
                setRg,
                setEstado,
                setCidade,
                setEndereco,
                setCellPhone,
                setPhone
            }
        }>
            {children}
        </ContactContext.Provider>
    )
}

