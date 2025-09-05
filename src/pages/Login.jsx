import { useState } from "react";
import loginImage from "../assets/login.svg"
import { Eye ,EyeOff } from "lucide-react";
function Login() {
    const [showPassword, setShowPassword] = useState(false);
    return(
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-gray-900">
        <div className="flex flex-col justify-center items-center p-6 h-screen w-full ">
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-8  text-center lg:text-left">
             Sign<span className="ml-2 text-gray-800 dark:text-white">In</span> 
            </h1>

     <form className="w-full max-w-sm space-y-4 dark:text-white ">
    <label className="flex justify-start text-black-1000 font-medium mb-1">Email</label>
        <input type="email" 
        placeholder="john@gmail.com"
        className="w-full p-3 border rounded-lg" 
        />
        <div className="relative">
        <label className="flex justify-start text-black-1000 font-medium mb-1 ">Password</label>
        <input
         type={showPassword ? "text" : "password" } 
        placeholder="............."
        className="w-full p-3 border rounded-lg"
        />
        <button
        type ="button"
        onClick={ () => setShowPassword(prev => !prev)}
        className="absolute right-3 top-10 translate-0"
        >
            {showPassword ? (
                <EyeOff className=" w-5 h-5 " />
            ):(
                 <Eye className=" w-5 h-5 " /> 
            )}
        </button>
        </div>
        <button className="cursor-pointer flex justify-self-center text-white px-4 py-2 rounded-lg bg-blue-600 transition delay-10 duration-300 ease-in-out hover:scale-110 hover:bg-blue-600">Sign in</button>
         </form>
        </div>


        {/* Image Section */}

        <div className="hidden lg:flex h-screen flex-col justify-center items-center text-justify gap-y-36   px-2 bg-gradient-to-b from-white to-blue-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-900">
            <p className="text-xl lg:text-3xl font-semibold text-blue-700 dark:bg-gray-00 leading-snug text-center px-6 lg:px-16">
               Welcome Back! <br />
               <span className="text-blue-700 ">Please Sign in to continue</span>
            </p>
            <img src={loginImage} alt="Signup Illustration" className=" dark:bg-gray-900 w-3/4 h-auto max-h-screen object-contain" /> 
            </div>

    </div>
    );
}

export default Login;