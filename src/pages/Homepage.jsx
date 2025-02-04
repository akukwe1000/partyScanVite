import './css/Home.css'
import './css/Mobilehome.css'
import heropix from '../assets/husbandWife.jpg'
import heropixRound from '../assets/wifeHus.jpg'
import { Link } from 'react-router-dom'
import { FaBowlFood } from 'react-icons/fa6'
import { FaBookOpen, FaClipboardList, FaGift } from 'react-icons/fa'
import { MdOutlineTableBar } from 'react-icons/md'
import { BiSolidDrink } from 'react-icons/bi'
import { IoMdPhotos } from 'react-icons/io'


const Homepage = () => {
  return (
    
    <div >
        <div className="  h-[400px] lg:h-[500px] relative">
           <img src={heropix} alt="" className='h-full w-full object-cover '  />
           <div className='h-[200px] w-full  absolute top-[300px] lg:top-[400px] flex justify-center '>
              <div className='0 h-[200px] w-[200px] rounded-full overflow-hidden'>
                <img src={heropixRound} alt="" className='h-full w-full object-cover ' />
              </div>
           </div>
              <div className='h-[200px] flex justify-center items-center'> 
                <h1 className='text-[30px] text-white font-bold mt-[70px]'>Favour Wed MIMI</h1>
              </div>
              <div className=' test pb-[80px]'>
                  <Link to='/visitor'>
                    <div className="box  ">
                      <div className="pixCon shadow-xl bg-gray-600 text-white text-[22px] rounded-[15px] lg:rounded-[20px] h-[80px] lg:h-[160px]  flex items-center justify-center lg:gap-[20px]  gap-[5px] lg:pt-[0] pt-[5px] flex-col">
                        <FaBookOpen size={50} color='gold'/>
                        <h1 className='text-[16px] lg:text-[22px]'>Visitor</h1>
                      </div>
                    </div>
                  </Link>

                  <Link to='/picture'>
                    <div className="box ">
                      <div className="pixCon shadow-xl bg-gray-600 text-white text-[22px] rounded-[15px] lg:rounded-[20px] h-[80px] lg:h-[160px]  flex items-center justify-center lg:gap-[20px]  gap-[5px] lg:pt-[0] pt-[5px] flex-col">
                        <MdOutlineTableBar size={50} color='gold'/>
                        <h1 className='text-[16px] lg:text-[22px]'>Settings</h1>
                      </div>
                    </div>

                  </Link>
                  <Link to='/program'>
                    <div className="box ">
                      <div className="pixCon shadow-xl bg-gray-600 text-white text-[22px] rounded-[15px] lg:rounded-[20px] h-[80px] lg:h-[160px]  flex items-center justify-center lg:gap-[20px]  gap-[5px] lg:pt-[0] pt-[5px] flex-col">
                      <FaClipboardList size={50} color='gold'/>                                             
                        <h1 className='text-[16px] lg:text-[22px]'>Wedding Program</h1>
                      </div>
                    </div>
                  </Link>

                  <Link to='/food'>
                    <div className="box ">
                      <div className="pixCon shadow-xl bg-gray-600 text-white text-[22px] rounded-[15px] lg:rounded-[20px] h-[80px] lg:h-[160px]  flex items-center justify-center lg:gap-[20px]  gap-[5px] lg:pt-[0] pt-[5px] flex-col">
                      <FaBowlFood size={50} color='gold'/>                                             
                        <h1 className='text-[16px] lg:text-[22px]'>Food</h1>
                      </div>
                    </div>
                  </Link>
                  
                  <Link to='/drink'>
                    <div className="box ">
                      <div className="pixCon shadow-xl bg-gray-600 text-white text-[22px] rounded-[15px] lg:rounded-[20px] h-[80px] lg:h-[160px]  flex items-center justify-center lg:gap-[20px]  gap-[5px] lg:pt-[0] pt-[5px] flex-col">
                        <BiSolidDrink size={50} color='gold'/>                      
                        <h1 className='text-[16px] lg:text-[22px]'>Drinks</h1>
                      </div>
                    </div>
                  </Link>
                  
                  <Link to='/photo'>
                    <div className="box ">
                      <div className="pixCon shadow-xl bg-gray-600 text-white text-[22px] rounded-[15px] lg:rounded-[20px] h-[80px] lg:h-[160px]  flex items-center justify-center lg:gap-[20px]  gap-[5px] lg:pt-[0] pt-[5px] flex-col">
                        <IoMdPhotos size={50} color='gold'/>                        
                        <h1 className='text-[16px] lg:text-[22px]'>Wedding Photo</h1>
                      </div>
                    </div>
                  </Link>

                  <Link to='/gift'>
                    <div className="box ">
                      <div className="pixCon shadow-xl bg-gray-600 text-white text-[22px] rounded-[15px] lg:rounded-[20px] h-[80px] lg:h-[160px]  flex items-center justify-center lg:gap-[20px]  gap-[5px] lg:pt-[0] pt-[5px] flex-col">
                        <FaGift size={50} color='gold'/>                        
                        <h1 className='text-[16px] lg:text-[22px]'>Gift</h1>
                      </div>
                    </div>
                  </Link>
                  
                              
              </div>
              {/* <div className=' grid grid-cols-2 gap-8  lg:grid-cols-3 place-items-center m-auto w-[80%] '>
                  <div className="card bb h-[90px]  rounded-[10px] w-[100%] lg:h-[200px] lg:w-[80%] "></div>
                  <div className="card bb h-[90px] rounded-[10px] w-[100%] lg:h-[200px] lg:w-[80%] "></div>
                  <div className="card bb h-[90px] rounded-[10px] w-[100%] lg:h-[200px] lg:w-[80%] "></div>
                  <div className="card bb h-[90px] rounded-[10px] w-[100%] lg:h-[200px] lg:w-[80%] "></div>
                  <div className="card bb h-[90px] rounded-[10px] w-[100%] lg:h-[200px] lg:w-[80%] "></div>
                  <div className="card bb h-[90px] rounded-[10px] w-[100%] lg:h-[200px] lg:w-[80%] "></div>
                  <div className="card bb h-[90px] rounded-[10px] w-[100%] lg:h-[200px] lg:w-[80%] "></div>
                              
              </div> */}
              
        </div>
    </div>
  )
}

export default Homepage