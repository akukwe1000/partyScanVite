import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './css/Home.css';
import tableSet from '../assets/tableSet.jpg';
import wifeHus from '../assets/wifeHus.jpg';

const Picture = () => {
  const [photos, setPhotos] = useState([wifeHus]); // initial array with existing photos

  // Load photos from localStorage when the component mounts
  useEffect(() => {
    const savedPhotos = JSON.parse(localStorage.getItem('photos')); // Get photos from localStorage
    if (savedPhotos) {
      setPhotos(savedPhotos); // Set the photos in state if available
    }
  }, []);

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPhotos = [...photos, reader.result]; // Add the uploaded image to the list
        setPhotos(newPhotos);

        // Save the updated photos array to localStorage
        localStorage.setItem('photos', JSON.stringify(newPhotos));
      };
      reader.readAsDataURL(file); // Read the file as data URL
    }
  };

  return (
    <div
      className="bodies"
      style={{
        backgroundImage: `url(${tableSet})`,
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Upload Photo button */}
      <div className="h-[100px] flex justify-center items-center w-[100%] z-10 fixed top-[550px] left-0">
        <div className="bg-blue-200 text-center w-[30%] pt-[10px] pb-[10px]">
          <label htmlFor="file-upload" className="cursor-pointer">
            Upload Photo
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
          />
        </div>
      </div>

      {/* Back to Home link */}
      <Link to='/' className="font-bold text-[25px] ml-[10px] mt-[30px]">
        <div className="flex items-center gap-[5px] w-[150px] text-blue-500">
          <IoChevronBack size={30} color="blue" className="ml-[20px]" />
          Home
        </div>
      </Link>

      {/* Wedding Photos header */}
      <h1 className="font-bold text-center mt-[30px] mb-[20px] text-[30px] text-white">
        Wedding Photos
      </h1>

      {/* Displaying photos */}
      <div className="background w-[80%] text-[22px] font-[bold] m-auto rounded-[10px] text-yellow-200 p-[20px] relative">
        <div className="mt-[20px] flex flex-col gap-[15px]">
          {photos.map((photo, index) => (
            <div key={index} className="h-[300px] w-[60%] m-auto">
              <img
                className="h-full w-full object-cover rounded-[10px]"
                src={photo}
                alt={`uploaded-photo-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Picture;
