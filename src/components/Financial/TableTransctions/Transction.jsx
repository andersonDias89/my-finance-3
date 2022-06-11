import { FiEdit } from "react-icons/fi"
import { RiDeleteBin6Line } from "react-icons/ri"

type TransctionProps = {
    title: string 
    amount: string 
    date: string
    typeAmount: string
    
}

export const Transction = ({title, amount, date, typeAmount}: TransctionProps) => {
    return (
        <tr className="text-left  border-b border-dashed border-gray-700 text-slate-200">
            <th className="py-2">{title}</th>
            <th className="text-xs"><span className={`px-1 rounded-lg ${typeAmount === "saída" ? "text-rose-600 bg-redTransparent" : "text-emerald-400 bg-greenTransparent"} `}>{typeAmount}</span></th>
            <th>{amount}</th>
            <th className="text-gray-500">{date}</th>
            <th className="space-x-3">
                <button className="text-gray-600"><FiEdit /></button>
                <button className="text-red-900"><RiDeleteBin6Line /></button>
            </th>
        </tr>
    )
}