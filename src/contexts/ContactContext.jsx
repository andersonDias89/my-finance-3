import { createContext, useContext, useEffect, useState, useAppContext } from "react"


export const ContactContext = createContext()

export function ContactContextProvider({ children }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        console.log(name, email)
    }, [name, email])

    return (

        <ContactContext.Provider value={{setName, setEmail, name, email}}>
            {children}
        </ContactContext.Provider>

    )
}

