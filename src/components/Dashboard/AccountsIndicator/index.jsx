import { BsArrowDownCircle,  BsBoxArrowUpRight } from "react-icons/bs"
import Link from "next/link"

export const AccountsIndicator = () => {
    return (
        <div className="w-1/2 bg-box rounded-lg p-8 text-xs relative">

            <div className="absolute right-4 top-2 text-sm cursor-pointer text-gray-700">
                <Link href={'/financeiro'}>
                    <span className="">
                        <a><BsBoxArrowUpRight /></a>
                    </span>
                </Link>
            </div>

            <div className="mb-3">
                <h3 className="text-gray-500 text-2xl">Mês atual</h3>
                <div className="flex items-center space-x-1 text-red-600">
                    <span>Saídas</span>
                    <span><BsArrowDownCircle /></span>
                </div>
            </div>

            <table className="w-full">
                <thead className="">
                    <tr className="text-left text-gray-700 border-b border-dashed border-gray-700">
                        <th className="py-2">Transação</th>
                        <th>Tipo</th>
                        <th>Valor</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="text-left  border-b border-dashed border-gray-700 text-slate-200">
                        <th className="py-2">Notebook</th>
                        <th className="text-rose-600 text-xs"><span className="px-1 rounded-lg bg-redTransparent">saída</span></th>
                        <th>R$ 2.000,00</th>
                        <th className="text-gray-500">21/03/2022</th>
                    </tr>

                    <tr className="text-left  border-b border-dashed border-gray-700 text-slate-200">
                        <th className="py-2">Notebook</th>
                        <th className="text-rose-600 text-xs"><span className="px-1 rounded-lg bg-redTransparent">saída</span></th>
                        <th>R$ 2.000,00</th>
                        <th className="text-gray-500">21/03/2022</th>
                    </tr>

                    <tr className="text-left  border-b border-dashed border-gray-700 text-slate-200">
                        <th className="py-2">Notebook</th>
                        <th className="text-rose-600 text-xs"><span className="px-1 rounded-lg bg-redTransparent">saída</span></th>
                        <th>R$ 2.000,00</th>
                        <th className="text-gray-500">21/03/2022</th>
                    </tr>

                    <tr className="text-left  border-b border-dashed border-gray-700 text-slate-200">
                        <th className="py-2">Notebook</th>
                        <th className="text-rose-600 text-xs"><span className="px-1 rounded-lg bg-redTransparent">saída</span></th>
                        <th>R$ 2.000,00</th>
                        <th className="text-gray-500">21/03/2022</th>
                    </tr>

                    <tr className="text-left  border-b border-dashed border-gray-700 text-slate-200">
                        <th className="py-2">Notebook</th>
                        <th className="text-rose-600 text-xs"><span className="px-1 rounded-lg bg-redTransparent">saída</span></th>
                        <th>R$ 2.000,00</th>
                        <th className="text-gray-500">21/03/2022</th>
                    </tr>

                    <tr className="text-left  border-b border-dashed border-gray-700 text-slate-200">
                        <th className="py-2">Notebook</th>
                        <th className="text-rose-600 text-xs"><span className="px-1 rounded-lg bg-redTransparent">saída</span></th>
                        <th>R$ 2.000,00</th>
                        <th className="text-gray-500">21/03/2022</th>
                    </tr>

                    <tr className="text-left  border-b border-dashed border-gray-700 text-slate-200">
                        <th className="py-2">Notebook</th>
                        <th className="text-rose-600 text-xs"><span className="px-1 rounded-lg bg-redTransparent">saída</span></th>
                        <th>R$ 2.000,00</th>
                        <th className="text-gray-500">21/03/2022</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
