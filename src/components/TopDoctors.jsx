import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
const TopDoctors = () => {
    const navigate = useNavigate();
    const doctors = useSelector((state)=> state.doctors)
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className="text-4xl font-semibold bg-gradient-to-r from-teal-800 to-emerald-500 bg-clip-text text-transparent">Top Doctors to Book</h1>
        <p className='sm:w-1/3 text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita rerum.</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {doctors.slice(0,12).map((item,index)=>(
                <div onClick={()=>{navigate(`/appoinments/${item._id}`); scrollTo(0,0)}} key={index} className='border border-gray-200 rounded-2xl overflow-hidden cursor-pointer shadow-lg transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl'>
                    <img className='bg-green-50' src={item.image} alt=''/>
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                            <p>Available</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='bg-green-100 text-gray-600 px-12 py-3 mt-10 rounded-full font-medium hover:bg-blue-200 duration-300'>view all</button>
    </div>
  )
}

export default TopDoctors