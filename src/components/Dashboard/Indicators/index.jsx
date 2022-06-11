import Link from "next/link"
import { BsArrowDownCircle, BsArrowUpCircle, BsBoxArrowUpRight } from "react-icons/bs"
import { FaPlus } from "react-icons/fa"
import { ImUsers } from 'react-icons/im'

export const Indicators = () => {
    return (
        <div className="grid grid-cols-3 gap-5 ">
            <div className="bg-box p-3 rounded-lg h-24 grid grid-cols-2 relative">
                <div className="flex flex-col border-r border-line justify-center items-center text-red-600">
                    <span>Saída</span>
                    <span>R$ 500,00</span>
                </div>

                <div className="flex items-center justify-center space-x-2 text-red-600">
                    <span className="text-2xl"><BsArrowDownCircle /></span>
                    <span className="text-3xl">27%</span>
                </div>

                <div className="absolute right-4 bottom-2 text-sm cursor-pointer text-gray-700">
                    <Link href={'/financeiro'}>
                        <span className="">
                            <a><BsBoxArrowUpRight/></a>
                        </span>
                    </Link>
                </div>
            </div>

            <div className="bg-box p-3 rounded-lg h-24 grid grid-cols-2 relative">
                <div className="flex flex-col border-r border-line justify-center items-center text-green">
                    <span>Entrada</span>
                    <span>R$ 1.000,00</span>
                </div>

                <div className="flex items-center justify-center space-x-2 text-green">
                    <span className="text-2xl"><BsArrowUpCircle /></span>
                    <span className="text-3xl">64%</span>
                </div>

                <div className="absolute right-4 bottom-2 text-sm cursor-pointer text-gray-700">
                    <Link href={'/financeiro'}>
                        <span className="">
                            <a><BsBoxArrowUpRight/></a>
                        </span>
                    </Link>
                </div>
            </div>

            <div className="bg-box p-3 rounded-lg h-24 grid grid-cols-2 relative">
                <div className="flex border-r border-line justify-center items-center text-blueLight">
                    <span className="text-4xl"><ImUsers /></span>
                    <span className="text-3xl">10</span>
                </div>

                <div className="flex items-center justify-center space-x-2 text-blueLight">
                    <span className="text-2xl"><FaPlus /></span>
                    <span className="text-3xl">16%</span>
                </div>

                <div className="absolute right-4 bottom-2 text-sm cursor-pointer text-gray-700">
                    <Link href={'/contatos'}>
                        <span>
                            <a><BsBoxArrowUpRight/></a>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}