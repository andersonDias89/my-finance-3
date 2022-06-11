
export const Category = ({title}) => {
    return (
        <div className="flex justify-between">
            <li className={` font-black text-blueLight text-xs`}>{title}</li>
            <span className={`w-4 h-4 bg-gray-800 text-white text-xs flex items-center justify-center rounded-lg`}>0</span>
        </div>
    )
}