import { Link } from "react-router-dom"
import { specialityData } from "../assets/assets"
const SpecialityMenu = () => {
  return (
    <div id="speciality">
        <h1>Find by Speciality</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ullam perferendis ex sit, a illo!</p>
        <div>
            {specialityData.map((item,index)=>(
                <Link key={index} to={`/doctors/${item.speciality}`}>
                    <img src={item.image} alt=""/>
                    <p>{item.speciality}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu