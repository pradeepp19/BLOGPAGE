import LandingVideo from "../assets/landingpagevideo.mp4"

function Landinpage () {
    return (
    <div className=" min-h-screen flex flex-col items-center justify-center text-center  px-4 pt-20 dark:bg-gray-900 ">
        <h1 className="font-semibold text-blue-800  dark:text-white leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl "> 
            Create, share
         </h1>
           <h2 className="font-semibold text-blue-800 dark:text-white leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl mt-3"> 
           and Inspire through your blogs
         </h2>
         <h5 className="font-medium text-zinc-900 dark:text-white  text-base leading-tight tracking-tight pt-6 max-w-3xl mt-3">Effortlessly write, collaborate, and scale your content with the power of BlogPage — your space to connect ideas with people.</h5>

         <div className="mt-12 w-full max-w-4xl pt-5">
            <video src={LandingVideo} autoPlay
          loop
          muted
          playsInline className=" rounded-xl shadow-lg w-full h-auto object-cover"/>
         </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-12 pb-12 gap-12 w-full max-w-sreen">
            
             <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover-scale-110 transition-transform" >
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-400 mb-3">✍️ Create</h3>
                <p className="text-gray-700 dark:text-gray-300">Start your blogging journey with ease. Write, edit, and publish your ideas in a distraction-free editor.</p>
            </div>


            <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover-scale-110 transition-transform" >
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-400 mb-3">🤝 Collaborate</h3>
                <p className="text-gray-700 dark:text-gray-300">Share your thoughts with the community, invite contributors, and grow your reach through collaboration.</p>
            </div>

             <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover-scale-110 transition-transform" >
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-400 mb-3">🚀 Inspire</h3>
                <p className="text-gray-700 dark:text-gray-300">Engage your readers, spark conversations, and inspire others with your unique stories and insights. </p>
            </div>
            
        </div>


    </div>
    );
}
export default Landinpage;