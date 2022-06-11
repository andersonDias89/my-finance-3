import Link from "next/link"

export const Navegation = () => {
    return (
        <ul className="text-sm flex  space-x-5 text-slate-200 h-16 items-center flex-1">
            <Link href={'/dashboard'}>
                <li className={`hover:text-slate-400 cursor-pointer`}>Dashboard</li>
            </Link>

            <Link href={'/financeiro'}>
                <li className="hover:text-slate-400 cursor-pointer">Financeiro</li>
            </Link>
            
            <Link href={'/contatos'}>
                <li className="hover:text-slate-400 cursor-pointer">Contatos</li>
            </Link>
        </ul>
    )
}