import { HeaderContacts } from "../components/Contacts/ContactsHeader";
import { FilterContacts } from "../components/Contacts/FilterContacts";
import { ListContacts } from "../components/Contacts/ListContacts";
import { ProfileContact } from "../components/Contacts/ProfileContact";
import { Header } from "../components/Header";


export default function Contatos() {
    return (
        <>
            <Header />

            {/* <div className="w-11/12 m-auto">
                <HeaderContacts />
            </div> */}

            <div className="w-11/12 m-auto flex space-x-4 mt-5">
                <FilterContacts />
                <ListContacts />
                <ProfileContact />
            </div>
        </>
    )
}