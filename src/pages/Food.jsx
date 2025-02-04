// import { IoChevronBack } from "react-icons/io5"
// import { Link } from "react-router-dom"
// import './css/Home.css'
// import tableSet from '../assets/tableSet.jpg'



// const Food = () => {
//   return (
    
//       <div className="h-[360vh] " style={{backgroundImage: `url(${tableSet})`, backgroundSize: 'cover',  backgroundRepeat:"no-repeat"}}>
//           <Link to='/' className="font-bold text-[25px] ml-[10px] mt-[30px "> <div className="flex items-center gap-[5px] w-[150px] text-blue-500 "> <IoChevronBack size={30} color="blue" className=" ml-[20px]" /> Home </div> </Link>

//           <h1 className="font-bold text-center mt-[30px] mb-[20px] text-[30px] text-white">Food Selections</h1>
//           <div className=" background w-[80%] text-[22px] font-[bold] m-auto rounded-[10px] text-yellow-200 p-[20px]">
//             <div className="flex  justify-evenly"> <div><h2>Finger Foods</h2> <div className="underlien h-[2px] mt-[5px] bg-blue-500"></div ></div> <div><h2>Mains</h2> <div className="underline h-[2px] mt-[5px] bg-blue-500"></div></div> </div>
//                                             {/* finger section 1111111111111111111111111111111111111111111 */}
//             <div className="fingerSection w-[90%] m-auto ">
//               <div className="flex  justify-between pt-[20px] gap-[30px]">
//                 <div><img className="h-[100px] mt-[10px] w-[100px] rounded-[10px]" src={tableSet} alt="" /></div>  <div className="w-[70%] lg:w-[40%] "><h1 className="font-bold text-[25px]">Pof Pof</h1> <p className="text-[16px] lg:text-[20px]">Sweet fruity and mily fried balls with high nutritional valeu Lorem ipsum dolor sit amet, consectetur adipisicing elit.,  commodi aperiam.</p></div>
//               </div>
//               <div className="flex  justify-between pt-[20px] gap-[30px]">
//                 <div><img className="h-[100px] mt-[10px] w-[100px] rounded-[10px]" src={tableSet} alt="" /></div>  <div className="w-[70%] lg:w-[40%] "><h1 className="font-bold text-[25px]">Pof Pof</h1> <p className="text-[16px] lg:text-[20px]">Sweet fruity and mily fried balls with high nutritional valeu Lorem ipsum dolor sit amet, consectetur adipisicing elit.,  commodi aperiam.</p></div>
//               </div>
//               <div className="flex  justify-between pt-[20px] gap-[30px]">
//                 <div><img className="h-[100px] mt-[10px] w-[100px] rounded-[10px]" src={tableSet} alt="" /></div>  <div className="w-[70%] lg:w-[40%] "><h1 className="font-bold text-[25px]">Pof Pof</h1> <p className="text-[16px] lg:text-[20px]">Sweet fruity and mily fried balls with high nutritional valeu Lorem ipsum dolor sit amet, consectetur adipisicing elit.,  commodi aperiam.</p></div>
//               </div>
//               <div className="flex  justify-between pt-[20px] gap-[30px]">
//                 <div><img className="h-[100px] mt-[10px] w-[100px] rounded-[10px]" src={tableSet} alt="" /></div>  <div className="w-[70%] lg:w-[40%] "><h1 className="font-bold text-[25px]">Pof Pof</h1> <p className="text-[16px] lg:text-[20px]">Sweet fruity and mily fried balls with high nutritional valeu Lorem ipsum dolor sit amet, consectetur adipisicing elit.,  commodi aperiam.</p></div>
//               </div>
//               <div className="flex  justify-between pt-[20px] gap-[30px]">
//                 <div><img className="h-[100px] mt-[10px] w-[100px] rounded-[10px]" src={tableSet} alt="" /></div>  <div className="w-[70%] lg:w-[40%] "><h1 className="font-bold text-[25px]">Pof Pof</h1> <p className="text-[16px] lg:text-[20px]">Sweet fruity and mily fried balls with high nutritional valeu Lorem ipsum dolor sit amet, consectetur adipisicing elit.,  commodi aperiam.</p></div>
//               </div>
//             </div>
//                                                 {/* food section  1111111111111111111111111111111111111111 */}
//             <div className="foodSection w-[90%] m-auto ">
//               <div className="flex  justify-between pt-[20px] gap-[30px]">
//                 <div><img className="h-[100px] mt-[10px] w-[100px] rounded-[10px]" src={tableSet} alt="" /></div>  <div className="w-[70%] lg:w-[40%] "><h1 className="font-bold text-[25px]">Egusi</h1> <p className="text-[16px] lg:text-[20px]">Sweet fruity and mily fried balls with high nutritional valeu Lorem ipsum dolor sit amet, consectetur adipisicing elit.,  commodi aperiam.</p></div>
//               </div>
//               <div className="flex  justify-between pt-[20px] gap-[30px]">
//                 <div><img className="h-[100px] mt-[10px] w-[100px] rounded-[10px]" src={tableSet} alt="" /></div>  <div className="w-[70%] lg:w-[40%] "><h1 className="font-bold text-[25px]">Egusi</h1> <p className="text-[16px] lg:text-[20px]">Sweet fruity and mily fried balls with high nutritional valeu Lorem ipsum dolor sit amet, consectetur adipisicing elit.,  commodi aperiam.</p></div>
//               </div>
//               <div className="flex  justify-between pt-[20px] gap-[30px]">
//                 <div><img className="h-[100px] mt-[10px] w-[100px] rounded-[10px]" src={tableSet} alt="" /></div>  <div className="w-[70%] lg:w-[40%] "><h1 className="font-bold text-[25px]">Egusi</h1> <p className="text-[16px] lg:text-[20px]">Sweet fruity and mily fried balls with high nutritional valeu Lorem ipsum dolor sit amet, consectetur adipisicing elit.,  commodi aperiam.</p></div>
//               </div>
//               <div className="flex  justify-between pt-[20px] gap-[30px]">
//                 <div><img className="h-[100px] mt-[10px] w-[100px] rounded-[10px]" src={tableSet} alt="" /></div>  <div className="w-[70%] lg:w-[40%] "><h1 className="font-bold text-[25px]">Egusi</h1> <p className="text-[16px] lg:text-[20px]">Sweet fruity and mily fried balls with high nutritional valeu Lorem ipsum dolor sit amet, consectetur adipisicing elit.,  commodi aperiam.</p></div>
//               </div>
//               <div className="flex  justify-between pt-[20px] gap-[30px]">
//                 <div><img className="h-[100px] mt-[10px] w-[100px] rounded-[10px]" src={tableSet} alt="" /></div>  <div className="w-[70%] lg:w-[40%] "><h1 className="font-bold text-[25px]">Egusi</h1> <p className="text-[16px] lg:text-[20px]">Sweet fruity and mily fried balls with high nutritional valeu Lorem ipsum dolor sit amet, consectetur adipisicing elit.,  commodi aperiam.</p></div>
//               </div>
//               <div className="flex  justify-between pt-[20px] gap-[30px]">
//                 <div><img className="h-[100px] mt-[10px] w-[100px] rounded-[10px]" src={tableSet} alt="" /></div>  <div className="w-[70%] lg:w-[40%] "><h1 className="font-bold text-[25px]">Egusi</h1> <p className="text-[16px] lg:text-[20px]">Sweet fruity and mily fried balls with high nutritional valeu Lorem ipsum dolor sit amet, consectetur adipisicing elit.,  commodi aperiam.</p></div>
//               </div>
//             </div>
//           </div>
        
//     </div>
//   )
// }

// export default Food



import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import './css/Home.css';
import tableSet from '../assets/tableSet.jpg';
import { useState } from 'react';

const Food = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState('fingerFood');

  // Handler to toggle between 'fingerFood' and 'mainCourse'
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="h-[360vh]" style={{ backgroundImage: `url(${tableSet})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
      <Link to='/' className="font-bold text-[25px] ml-[10px] mt-[30px]"> 
        <div className="flex items-center gap-[5px] w-[150px] text-blue-500">
          <IoChevronBack size={30} color="blue" className=" ml-[20px]" /> 
          Home 
        </div> 
      </Link>

      <h1 className="font-bold text-center mt-[30px] mb-[20px] text-[30px] text-white">Food Selections</h1>

      <div className="background w-[80%] text-[22px] font-[bold] m-auto rounded-[10px] text-yellow-200 p-[20px]">
        {/* Section Selector */}
        <div className="flex justify-evenly">
          
          <div
            className={`cursor-pointer ${activeSection === 'fingerFood' ? 'underline' : ''}`}
            onClick={() => handleSectionChange('fingerFood')}
          >
            <h2>Finger Foods</h2>
          </div>
          <div
            className={`cursor-pointer ${activeSection === 'mainCourse' ? 'underline' : ''}`}
            onClick={() => handleSectionChange('mainCourse')}
          >
            <h2>Mains</h2>
          </div>
        </div>

        {/* Finger Food Section */}
        {activeSection === 'fingerFood' && (
          <div className="fingerSection w-[90%] m-auto">
            {/* Example of Finger Food Item */}
            <div className="flex justify-between pt-[20px] gap-[30px]">
              <div>
                <img className="h-[100px] mt-[10px] w-[100px] rounded-[10px]" src={tableSet} alt="" />
              </div>
              <div className="w-[70%] lg:w-[40%]">
                <h1 className="font-bold text-[25px]">Pof Pof</h1>
                <p className="text-[16px] lg:text-[20px]">Sweet fruity and milky fried balls with high nutritional value.</p>
              </div>
            </div>
            {/* Repeat similar structure for other items */}
          </div>
        )}

        {/* Main Course Section */}
        {activeSection === 'mainCourse' && (
          <div className="foodSection w-[90%] m-auto">
            {/* Example of Main Course Item */}
            <div className="flex justify-between pt-[20px] gap-[30px]">
              <div>
                <img className="h-[100px] mt-[10px] w-[100px] rounded-[10px]" src={tableSet} alt="" />
              </div>
              <div className="w-[70%] lg:w-[40%]">
                <h1 className="font-bold text-[25px]">Egusi</h1>
                <p className="text-[16px] lg:text-[20px]">Sweet fruity and milky fried balls with high nutritional value.</p>
              </div>
            </div>
            {/* Repeat similar structure for other items */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Food;
