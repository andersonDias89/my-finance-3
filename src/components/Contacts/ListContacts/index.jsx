import { useContext, useEffect, useState } from "react"
import { ContactContext } from "../../../contexts/ContactContext"
import { InputTextSearchContacts } from "../../Inputs/InputTextSeachContact"
import { Contact } from "./Contact"
import { v4 as uuid } from 'uuid'

export const ListContacts = () => {
    const {
        name,
        email,
        listContact,
        setListContact,
        cpf,
        rg,
        estado,
        endereco,
        cidade,
        cellPhone,
        phone
    } = useContext(ContactContext)

    useEffect(() => {
        if (name !== '' && email !== '') {
            setListContact([
                ...listContact,
                {
                    id: uuid(),
                    userName: name,
                    userEmail: email,
                    userCpf: cpf,
                    userRg: rg,
                    userEstado: estado,
                    userCidade: cidade,
                    userEndereco: endereco,
                    userCellPhone: cellPhone,
                    userPhone: phone
                }
            ])
            console.log(listContact)
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
                        <Contact
                            key={contact.id}
                            userName={contact.userName}
                            userEmail={contact.userEmail}
                        />
                    ))
                }
            </div>

        </div>
    )
}

