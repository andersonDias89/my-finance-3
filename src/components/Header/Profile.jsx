import Link from "next/link"
import { useState } from "react"
import { IoMdNotificationsOutline } from "react-icons/io"

export const Profile = () => {
    const [visibility, setVisibility] = useState(false)

    function toggle() {
        if (!visibility === true) {
            setVisibility(true)
        } else {
            setVisibility(false)
        }
    }


    return (
        <div className="flex items-center w-1/4 space-x-2 justify-end">
            <div className="border-r-2 pr-2 border-line text-right">
                <h2 className="text-sm text-slate-300">Anderson Dias</h2>
                <p className="text-xs text-slate-400">andersondiasmd21@gmail.com</p>
            </div>
            <button className="text-slate-200 text-2xl hover:text-slate-400">
                <IoMdNotificationsOutline />
            </button>
            <div className="relative">
                <button
                    onClick={toggle}
                    type="button"
                    className="hover:opacity-70 w-8 h-8 rounded-full bg-gray-500 text-slate-200 flex items-center justify-center">A</button>
                {visibility === true &&
                    <div className=" bg-box z-50 absolute right-0 shadow-lg rounded-lg py-2 px-8">
                        <Link href={'/'}>
                            <button
                                type="button"
                                className="text-slate-200 text-sm ">Sair</button>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}