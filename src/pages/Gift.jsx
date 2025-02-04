import { IoChevronBack } from "react-icons/io5"
import { Link } from "react-router-dom"
import wife from '../assets/wife.jpg'


const Gift = () => {
  return (
    <div className="h-[100vh] bg-white">
        <div className="h-[400px]  lg:h-[500px] lg:bg-[center_-200px] bg-[center_-20px]" style={{backgroundImage: `url(${wife})`, backgroundSize: 'cover',  backgroundRepeat:"no-repeat"}} >
          <Link to='/' className="font-bold text-[25px] ml-[10px] mt-[30px "> <div className="flex items-center gap-[5px] w-[150px] "> <IoChevronBack size={20} color="black" className=" ml-[20px]" /> Home </div> </Link>
        </div>
        
    </div>
  )
}

export default Gift