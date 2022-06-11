export const FilterTransctionsForm = () => {
    return (
        <form className="flex space-x-2">

            <div className="w-2/6 bg-primary h-8 rounded-lg flex overflow-hidden">
                <select

                    name="Tipo"
                    className="w-5/6 bg-transparent placeholder:text-gray-700 placeholder:text-xs text-xs px-3 text-slate-200 h-full outline-none"

                >
                    <option className="bg-box" value="janeiro">Janeiro</option>
                    <option className="bg-box" value="fevereiro">Fevereiro</option>
                    <option className="bg-box" value="março">Março</option>
                    <option className="bg-box" value="abril">Abril</option>
                    <option className="bg-box" value="maio" selected>Maio</option>

                </select>

            </div>

            <div className="w-2/6 bg-primary h-8 rounded-lg flex overflow-hidden">
                <select

                    name="Tipo"
                    className="w-5/6 bg-transparent placeholder:text-gray-700 placeholder:text-xs text-xs px-3 text-slate-200 h-full outline-none"

                >

                    <option className="bg-box" value="entrada">2019</option>
                    <option className="bg-box" value="saída">2020</option>
                    <option className="bg-box"value="saída">2021</option>
                    <option className="bg-box" value="saída" selected>2022</option>

                </select>

            </div>
            <div className="w-2/12 h-7 overflow-hidden rounded-lg">
                <button className="w-full h-full bg-gray-700 hover:bg-slate-600 font-black text-slate-100 flex items-center justify-center">
                    <span className='text-sm font-normal'>Filtrar</span>
                </button>
            </div>
        </form>
    )
}