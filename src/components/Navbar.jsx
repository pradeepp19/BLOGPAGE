import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const[isOpen,setIsOpen] = useState(false);
  const[darkMode, setDarkMode]=useState( () => {
    return localStorage.getItem("theme") === "dark";
  });
  useEffect( ()=> {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  },[darkMode]);
  
return(

  // DESKTOP


  <div className = "self-auto">
  <nav className=" relative w-screen bg-white dark:bg-gray-900 shadow-md px-8 h-16  flex justify-between items-center font-poppins">
    <Link to="/home"  className="text-4xl font-bold text-blue-600 dark:text-blue-400 text-center w-full md:w-auto md:text-left">
    Blog<span className="text-gray-800 dark:text-gray-200">Page</span>
    </Link>

    <div >
    <ul className="hidden  md:flex text-blue-700 dark:text-blue-400 font-medium space-x-6">
      <li>
        <button 
        onClick={()=> setDarkMode(!darkMode)}
        className="cursor-pointer  px-2 py-2 rounded-lg  transition delay-10 duration-300 ease-in-out hover:scale-110 hover:bg-white-600">
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          ):(
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>)}
        </button>
      </li>
    <li>
     <Link to="/login"  >
      <button className="cursor-pointer text-white px-4 py-2 rounded-lg bg-blue-600 transition delay-10 duration-300 ease-in-out hover:scale-110 hover:bg-blue-600">
      Login
      </button> 
      </Link> 
    </li>
    <li> 
    <Link to="/signup" >
      <button className="cursor-pointer text-white px-4 py-2 rounded-lg bg-blue-600 transition delay-10 duration-300 ease-in-out hover:scale-110 hover:bg-blue-600">
      Sign up
      </button> 
    </Link> 
    </li>
   </ul>
   </div>


{/* MOBILE */}


   <button className="md:hidden absolute right-8 top-4 "
   onClick={()=>setIsOpen(!isOpen)}
   >
    {isOpen ? (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    ):(
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    )}
   </button>


   {isOpen && (
    <div className="md:hidden absolute top-16 left-0 w-full bg-white  dark:bg-gray-900 shadow-lg flex flex-col items-center space-y-4 py-4">
    <ul className="flex flex-col items-center space-y-4">
    <li>
     <Link to="/login"  >
      <button className="text-white px-4 py-2 rounded-lg bg-blue-600 transition delay-10 duration-300 ease-in-out hover:scale-110 hover:bg-blue-600">
      Login
      </button> 
      </Link> 
    </li>
    <li> 
    <Link to="/signup"  >
      <button className="text-white px-4 py-2 rounded-lg bg-blue-600 transition delay-10 duration-300 ease-in-out hover:scale-110 hover:bg-blue-600">
      Sign up
      </button> 
    </Link> 
    </li>
    
   </ul>
   </div>
   )}
   </nav>
   </div>
);
}

export default Navbar;