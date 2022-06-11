export const NewTransctionsForm = () => {
    return (
        <form className="flex space-x-2 justify-end">
            <div className="bg-primary rounded-lg flex overflow-hidden w-3/12 h-8 ">
                <input
                    className="w-5/6 bg-transparent placeholder:text-gray-700 placeholder:text-xs text-xs p-3 text-slate-200 h-full outline-none"
                    type="text"
                    placeholder="Nova transação"
                />
            </div>

            <div className="w-2/12 bg-primary  rounded-lg flex overflow-hidden h-8">
                <input
                    className="w-5/6 bg-transparent placeholder:text-gray-700 placeholder:text-xs text-xs p-3 text-slate-200 h-full outline-none"
                    type="text"
                    placeholder="Valor"
                />
            </div>

            <div className="w-2/12 bg-primary h-8 rounded-lg flex overflow-hidden">
                <select

                    name="Tipo"
                    className="w-5/6  bg-transparent placeholder:text-gray-700 placeholder:text-xs text-xs px-3 text-slate-200 h-full outline-none"

                >
                    
                        <option className="bg-box" value="entrada" selected>Entrada</option>
                        <option className="bg-box" value="saída">Saída</option>
                    
                </select>

            </div>

            <div className="w-2/12 overflow-hidden rounded-lg h-7">
                <button className="text-sm space-x-1 w-full h-full bg-blueLight hover:bg-blueLightHover font-black text-slate-100 flex items-center justify-center">
                    Cadastrar
                </button>
            </div>
        </form>
    )
}