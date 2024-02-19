import { BsTwitterX } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";




export function Contacts(){
    return <div className = "bg-gray-400 h-60">
        <div className = "flex justify-center py-6 font-extrabold font-serif text-4xl">
        Contact Me
        </div>
        <div className="flex justify-center">
        <form>
            <div>
             <div className="text-2xl font-serif font-bold">Name</div>
             <br></br>
            <input type="text" placeholder="Name" className="rounded h-32 w-64"></input>
            <br></br>
            <br></br>
            <div className="text-2xl font-serif font-bold">Email</div>
            <br></br>
            <input type = "text" placeholder="Email" className="rounded h-32 w-64"></input>
            </div>
            <br>
            </br>
            <div>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Signup</button>

            </div>
            
        </form>
        <br>
        </br>
        </div>
        <br></br>
        <br></br>
        <div className="flex justify-center">
            <a href="https://twitter.com/AvishekSaha09" target="_blank" rel="noreferrer" className="px-4">
            <BsTwitterX />
            </a>
            <a href="https://github.com/Avishek27" target="_blank" rel="noreferrer" className="px-4">
            <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/avishek-saha-487495205/" target="_blank" rel="noreferrer" className="px-4">
            <FiLinkedin />
            </a>
        </div>
        
    </div>
}