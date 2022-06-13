import { useContext, useEffect, useState } from "react"
import { ContactContext } from "../../../contexts/ContactContext"
import { InputTextSearchContacts } from "../../Inputs/InputTextSeachContact"
import { Contact } from "./Contact"

export const ListContacts = () => {
    const { name, email, listContact, setListContact } = useContext(ContactContext)
    
    useEffect(() => {
        if (name !== '' && email !== '') {
            setListContact([
                ...listContact,
                {
                    userName: name,
                    userEmail: email
                }
            ])
            console.log(name)
            console.log(email)
        }
    }, [name, email])

    return (
        <div className="w-1/3 h-96 bg-box rounded-md py-5 px-4 flex flex-col">
            <header className="w-full h-14 px-4">
                <InputTextSearchContacts />
            </header>

            <div className="space-y-2 overflow-y-auto h-80 scroll-pl-px p-3">
                {
                    listContact.map(contact => (
                        <Contact userName={contact.userName} userEmail={contact.userEmail} />
                    ))
                }
            </div>

        </div>
    )
}



{/* <Contact
                    name="Anderson Dias"
                    email="andersondiasmd21@gmail.com"
                />

                <Contact
                    name="Karol Barreto"
                    email="karolbarreto@gmail.com"
                />

                <Contact
                    name="Alice Barreto"
                    email="alicebarreto@gmail.com"
                />

                <Contact
                    name="Maria da Silva"
                    email="mariadasilva@gmail.com"
                />

                <Contact
                    name="Maria da Silva"
                    email="mariadasilva@gmail.com"
                />

                <Contact
                    name="Maria da Silva"
                    email="mariadasilva@gmail.com"
                />

                <Contact
                    name="Maria da Silva"
                    email="mariadasilva@gmail.com"
                />

                <Contact
                    name="Maria da Silva"
                    email="mariadasilva@gmail.com"
                />

                <Contact
                    name="Maria da Silva"
                    email="mariadasilva@gmail.com"
                />

                <Contact
                    name="Maria da Silva"
                    email="mariadasilva@gmail.com"
                />

                <Contact
                    name="Maria da Silva"
                    email="mariadasilva@gmail.com"
                /> */}