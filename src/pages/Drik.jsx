import { IoChevronBack } from "react-icons/io5"
import { Link } from "react-router-dom"
import './css/Home.css'
import tableSet from '../assets/tableSet.jpg'



const Drik = () => {
  return (
    <div className="h-[360vh] " style={{backgroundImage: `url(${tableSet})`, backgroundSize: 'cover',  backgroundRepeat:"no-repeat"}}>
          <Link to='/' className="font-bold text-[25px] ml-[10px] mt-[30px "> <div className="flex items-center gap-[5px] w-[150px] text-blue-500 "> <IoChevronBack size={30} color="blue" className=" ml-[20px]" /> Home </div> </Link>

          <h1 className="font-bold text-center mt-[30px] mb-[20px] text-[30px] text-white">Drinks</h1>
          <div className=" background w-[80%] text-[22px] font-[bold] m-auto rounded-[10px] text-yellow-200 p-[20px]">
            <div>
                <h1 className="font-bold text-[25px] mt-[10px] mb-[20px]">Soft Drinks</h1>
                <div className="grid grid-cols-1 gap-8  lg:grid-cols-3">
                    <div className=" h-[200px]  rounded-[10px]"> <img className="h-full w-full object-cover rounded-[10px]" src={tableSet} alt="" /></div>
                    <div className=" h-[200px]  rounded-[10px]"> <img className="h-full w-full object-cover rounded-[10px]" src={tableSet} alt="" /></div>
                    <div className=" h-[200px]  rounded-[10px]"> <img className="h-full w-full object-cover rounded-[10px]" src={tableSet} alt="" /></div>
                    <div className=" h-[200px]  rounded-[10px]"> <img className="h-full w-full object-cover rounded-[10px]" src={tableSet} alt="" /></div>
                    <div className=" h-[200px]  rounded-[10px]"> <img className="h-full w-full object-cover rounded-[10px]" src={tableSet} alt="" /></div>
                    
                </div>
                <h1 className="font-bold text-[25px] mt-[10px] mb-[20px]">Alcoholic Drinks</h1>
                <div className="grid grid-cols-1 gap-8  lg:grid-cols-3">
                    <div className=" h-[200px]  rounded-[10px]"> <img className="h-full w-full object-cover rounded-[10px]" src={tableSet} alt="" /></div>
                    <div className=" h-[200px]  rounded-[10px]"> <img className="h-full w-full object-cover rounded-[10px]" src={tableSet} alt="" /></div>
                    <div className=" h-[200px]  rounded-[10px]"> <img className="h-full w-full object-cover rounded-[10px]" src={tableSet} alt="" /></div>
                    <div className=" h-[200px]  rounded-[10px]"> <img className="h-full w-full object-cover rounded-[10px]" src={tableSet} alt="" /></div>
                    <div className=" h-[200px]  rounded-[10px]"> <img className="h-full w-full object-cover rounded-[10px]" src={tableSet} alt="" /></div>
                    
                </div>
            </div>

          </div>
        
    </div>
  )
}

export default Drik