import { IoChevronBack } from "react-icons/io5"
import { Link } from "react-router-dom"
import './css/Home.css'
import tableSet from '../assets/tableSet.jpg'



const WeddingProgram = () => {
  return (
    <div className="h-[100vh] " style={{backgroundImage: `url(${tableSet})`, backgroundSize: 'cover',  backgroundRepeat:"no-repeat"}}>
          <Link to='/' className="font-bold text-[25px] ml-[10px] mt-[30px "> <div className="flex items-center gap-[5px] w-[150px] text-blue-500 "> <IoChevronBack size={30} color="blue" className=" ml-[20px]" /> Home </div> </Link>

          <h1 className="font-bold text-center mt-[30px] mb-[20px] text-[30px] text-white">Wedding Program</h1>
          <div className=" background w-[80%] text-[22px] font-[bold] m-auto rounded-[10px] text-yellow-200 p-[20px]">
            <h1>Arrival Of Guest</h1>
            <h1>Arrival Of Bride And Groom Parents </h1>
            <h1>Calling To The High Table</h1>
            <h1>Couple Grand Entry</h1>
            <h1>Openning Prayer</h1>
            <h1>Chairman Speech</h1>
            <h1>Cuttin Of The Cake</h1>
            <h1>Toast</h1>
            <h1>Games</h1>
            <h1>Couple First Dance</h1>
            <h1>Father And Daughter Dance</h1>
            <h1>Mother And Son Dance</h1>
            <h1>Both Families Dance With Couple</h1>
          </div>
        
    </div>
  )
}

export default WeddingProgram