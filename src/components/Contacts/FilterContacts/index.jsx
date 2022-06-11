import { FormEvent, useState } from 'react'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { ModalFormAddContact } from '../../Modal/ModalFormAddContact'
import { Category } from './Category'




export const FilterContacts = () => {
    const [categories, setCategories] = useState([
        {
            title: 'Total de contatos',   
        },
        {
            title: 'Aprovados',
        },
    ])

    const [newCategory, setNewCategory] = useState('')

    function handleAddCategory(e) {
        e.preventDefault()

        setNewCategory('')

        setCategories([
            ...categories,
            {
                title: newCategory
            }
        ])
        
    }

    return (
        <div className="w-1/3 h-96 bg-box rounded-md p-5 flex flex-col">
            <header className="w-full h-12">
                <h2 className="text-md text-slate-300 font-black">Categorias</h2>
            </header>

            <ul className="space-y-3 border-b-2 border-line pb-8 ">
                {categories.map((category, index) => {
                    return (
                        <Category
                            key={index}
                            title={category.title}
                            
                        />
                    )
                })}

            </ul>

            <div>
                <div>
                    <div className="py-4 mb-5 border-b-2 border-line">
                        <form
                            onSubmit={handleAddCategory}
                            className="bg-primary w-full h-7 rounded-lg flex overflow-hidden"
                        >
                            <input
                                type="text"
                                className="w-5/6 bg-transparent placeholder:text-gray-700 placeholder:text-xs text-xs p-3 text-slate-200 h-full outline-none"
                                placeholder="Add Categoria"
                                value={newCategory}
                                onChange={e => setNewCategory(e.target.value)}
                            />
                            <button

                                className="flex-1 bg-gray-700 hover:bg-gray-600 "
                                type='submit'
                            >
                                <div className='h-full w-full flex items-center justify-center text-lg  text-gray-800'>
                                    <IoMdAddCircleOutline />
                                </div>
                            </button>
                        </form>
                    </div>
                    <ModalFormAddContact />
                </div>
            </div>
        </div>
    )
}