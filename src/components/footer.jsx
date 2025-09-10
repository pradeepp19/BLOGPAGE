function footer() {
    return(
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-64">
            <div className="max-w-6xl mx-auto px-6 py-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-36">
                <div>
                    <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 text-center w-full md:w-auto md:text-left">
                     Blog<span className="text-gray-800 dark:text-gray-200">Page</span>
                    </h2>
                    <p className="mt-3 text-sm"> A space where ideas become conversations. Share your stories, inspire others, and build together.</p>
                </div>

                <div >
                    <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li> <a href="/" className="hover:text-blue-600">Home</a></li>
                        <li> <a href="/login" className="hover:text-blue-600">Login</a></li>
                        <li> <a href="/signup" className="hover:text-blue-600">Signup</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-3">Contact</h3>
                    <li> <a href="https://github.com/pradeepp19" className="text-blue-600 hover:underline">GitHub 💼</a></li>
                    <li> <a href="mailto:pradeepgude5@gmail.com" className="text-blue-600 hover:underline">Email 📧</a></li>
                    <li> <a href="https://www.linkedin.com/in/pradeep-gude-b693a4248/" className="text-blue-600 hover:underline">Linkdin 💼</a></li>
                </div>

            </div>





        </footer>

    )
}

export default footer;