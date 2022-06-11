import Link from "next/link"
import { FilterTransctionsForm } from "./FilterTransctionsForm"
import { NewTransctionsForm } from "./NewTransctionsForm"
import { Transction } from "./Transction"

export const TableTransctions = () => {
    return (

        <div className="w-11/12 text-md m-auto p-5 bg-box rounded-lg cursor-pointer">
            <div className="flex pb-5 justify-between">
                <div className="flex-1">
                    <FilterTransctionsForm />
                </div>
                <div className="w-7/12">
                    <NewTransctionsForm />
                </div>
            </div>
            <table className="w-full text-sm">
                <thead className="">
                    <tr className="text-left text-gray-700 border-b border-dashed border-gray-700">
                        <th className="py-2">Transação</th>
                        <th>Tipo</th>
                        <th>Valor</th>
                        <th>Data</th>
                        <th>Ação</th>
                    </tr>
                </thead>

                <tbody>
                    <Transction
                        title="Notebook"
                        amount="2.000,00"
                        date="20/02/2022"
                        typeAmount="saída"
                    />

                    <Transction
                        title="Salário"
                        amount="4.000,00"
                        date="20/02/2022"
                        typeAmount="entrada"
                    />

                    <Transction
                        title="Notebook"
                        amount="2.000,00"
                        date="20/02/2022"
                        typeAmount="saída"
                    />

                    <Transction
                        title="Freela"
                        amount="500,00"
                        date="22/04/2022"
                        typeAmount="entrada"
                    />

                    <Transction
                        title="Notebook"
                        amount="2.000,00"
                        date="20/02/2022"
                        typeAmount="saída"
                    />

                    <Transction
                        title="Pagamento de cliente"
                        amount="800,00"
                        date="20/02/2022"
                        typeAmount="entrada"
                    />

                    <Transction
                        title="Notebook"
                        amount="2.000,00"
                        date="20/02/2022"
                        typeAmount="saída"
                    />
                </tbody>
            </table>
        </div>

    )
} 