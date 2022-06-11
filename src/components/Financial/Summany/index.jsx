import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs'
import { IoMdAdd } from 'react-icons/io'


export const Summany = () => {
    return (
        <header className="w-full font-sans">
            <div className="py-5 w-11/12 m-auto flex justify-around space-x-1">
                <div className=" w-32 h-20 bg-box rounded-lg flex flex-col justify-center items-center text-green space-y-1">
                    <div className='flex justify-center items-center text-sm space-x-9'>
                        <span><BsArrowUpCircle /></span>
                        <span>Entrada</span>
                    </div>

                    <div className='flex justify-center items-center text-sm space-x-3'>
                        <span className='text-lg'>R$ 1.000,00</span>
                    </div>
                </div>


                <div className=" w-32 h-20 bg-box rounded-lg flex flex-col justify-center items-center text-red-600 space-y-1">
                    <div className='flex justify-center items-center text-sm space-x-8'>
                        <span><BsArrowDownCircle /></span>
                        <span>Saída</span>
                    </div>

                    <div className='flex justify-center items-center text-sm space-x-3'>
                        <span className='text-lg'>R$ 500,00</span>
                    </div>
                </div>

                <div className=" w-32 h-20 bg-box rounded-lg flex flex-col justify-center items-center text-blueLight space-y-1">
                    <div className='flex justify-center items-center text-sm space-x-8'>
                        <span><IoMdAdd /></span>
                        <span>Saldo</span>
                    </div>

                    <div className='flex justify-center items-center text-sm space-x-3'>
                        <span className='text-lg'>R$ 500,00</span>
                    </div>
                </div>

                <div className=" w-32 h-20 bg-box rounded-lg flex  justify-center space-x-1 items-center space-y-1">
                    <div className='flex flex-col items-center text-gray-600 text-sm'>
                        <span className='text-sm'>Receitas a pagar</span>
                        <span className='text-red-600 text-lg'>R$ 600,00</span>
                    </div>
                </div>

                <div className=" w-32 h-20 bg-box rounded-lg flex  justify-center space-x-1 items-center space-y-1">
                    <div className='flex flex-col items-center text-gray-600 text-sm'>
                        <span className='text-sm'>Receitas</span>
                        <span className='text-green text-lg'>R$ 800,00</span>
                    </div>
                </div>
                <div className=" w-32 h-20 bg-box rounded-lg flex  justify-center space-x-1 items-center space-y-1">
                    <div className='flex flex-col items-center text-gray-600 text-sm'>
                        <span className='text-sm'>Receitas a pagar</span>
                        <span className='text-red-600 text-lg'>R$ 700,00</span>
                    </div>
                </div>
                <div className=" w-32 h-20 bg-box rounded-lg flex  justify-center space-x-1 items-center space-y-1">
                    <div className='flex flex-col items-center text-gray-600 text-sm'>
                        <span className='text-sm'>Receitas</span>
                        <span className='text-green text-lg'>R$ 200,00</span>
                    </div>
                </div>



            </div>

        </header>
    )
}