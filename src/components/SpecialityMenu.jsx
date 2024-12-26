import { Link } from "react-router-dom"
import { specialityData } from "../assets/assets"
const SpecialityMenu = () => {
  return (
    <div id="speciality" className="flex flex-col items-center gap-4 py-16 text-gray-800">
        <h1 className="text-3xl font-medium">Find by Speciality</h1>
        <p className="sm:w-1/3 text-center text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ullam perferendis ex sit, a illo!</p>
        <div className="flex sm:justify-center gap-4 w-full overflow-scroll">
            {specialityData.map((item,index)=>(
                <Link onClick={()=>scrollTo(0,0)} className="flex flex-col mt-3 items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500" key={index} to={`/doctors/${item.speciality}`}>
                    <img className="w-12 sm:w-24 mb-2" src={item.image} alt=""/>
                    <p>{item.speciality}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu