import { createContext, useEffect, useState } from "react"


export const ContactContext = createContext()

export function ContactContextProvider({ children }) {
    const [listContact, setListContact] = useState([
        {
            userName: "Maria da Silva",
            userEmail: "mariadasilva@gmail.com"
        },

        {
            userName: "Eduardo da Silva",
            userEmail: "edudu@gmail.com"
        },

        {
            userName: "João da Silva",
            userEmail: "jojsj@gmail.com"
        },
    ])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    

    return (

        <ContactContext.Provider value={{setName, setEmail, name, email, listContact, setListContact}}>
            {children}
        </ContactContext.Provider>

    )
}

