import { IoChevronBack } from "react-icons/io5"
import { Link } from "react-router-dom"
import './css/Home.css'
import tableSet from '../assets/tableSet.jpg'
import wifeHus from '../assets/wifeHus.jpg'



const Photo = () => {
  return (
    <div className="bodies " style={{backgroundImage: `url(${tableSet})`, backgroundSize: 'cover',  backgroundRepeat:"no-repeat"}}>
            <div className=" h-[100px]  flex justify-center items-center  w-[100%] z-10 fixed top-[550px] left-0"><div className="bg-blue-200 text-center w-[30%] pt-[10px] pb-[10px]">Upload Photo</div></div>

          <Link to='/' className="font-bold text-[25px] ml-[10px] mt-[30px "> <div className="flex items-center gap-[5px] w-[150px] text-blue-500 "> <IoChevronBack size={30} color="blue" className=" ml-[20px]" /> Home </div> </Link>

          <h1 className="font-bold text-center mt-[30px] mb-[20px] text-[30px] text-white">Wedding Photos</h1>
          <div className=" background w-[80%] text-[22px] font-[bold] m-auto rounded-[10px] text-yellow-200 p-[20px] relative">
            <div>
              <div className=" h-[300px] w-[60%] m-auto"> <img className="h-full w-full object-cover rounded-[10px]" src={wifeHus} alt="" /></div>
            </div>

            <div className="mt-[20px] flex flex-col gap-[15px]">
              <div className=" h-[300px] w-[60%] m-auto"> <img className="h-full w-full object-cover rounded-[10px]" src={wifeHus} alt="" /></div>
              <div className=" h-[300px] w-[60%] m-auto"> <img className="h-full w-full object-cover rounded-[10px]" src={wifeHus} alt="" /></div>
              <div className=" h-[300px] w-[60%] m-auto"> <img className="h-full w-full object-cover rounded-[10px]" src={wifeHus} alt="" /></div>
              <div className=" h-[300px] w-[60%] m-auto"> <img className="h-full w-full object-cover rounded-[10px]" src={wifeHus} alt="" /></div>
              <div className=" h-[300px] w-[60%] m-auto"> <img className="h-full w-full object-cover rounded-[10px]" src={wifeHus} alt="" /></div>
              <div className=" h-[300px] w-[60%] m-auto"> <img className="h-full w-full object-cover rounded-[10px]" src={wifeHus} alt="" /></div>
              <div className=" h-[300px] w-[60%] m-auto"> <img className="h-full w-full object-cover rounded-[10px]" src={wifeHus} alt="" /></div>
              <div className=" h-[300px] w-[60%] m-auto"> <img className="h-full w-full object-cover rounded-[10px]" src={wifeHus} alt="" /></div>
              <div className=" h-[300px] w-[60%] m-auto"> <img className="h-full w-full object-cover rounded-[10px]" src={wifeHus} alt="" /></div>
              <div className=" h-[300px] w-[60%] m-auto"> <img className="h-full w-full object-cover rounded-[10px]" src={wifeHus} alt="" /></div>
            </div>
          </div>
        
    </div>
  )
}

export default Photo