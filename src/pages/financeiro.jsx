import { Summany } from "../components/Financial/Summany";
import { TableTransctions } from "../components/Financial/TableTransctions";
import { Header } from "../components/Header";

export default function Financeiro() {
    return (
        <>
        <Header/>
        <Summany/>
        <TableTransctions/>
        </>
    )
}