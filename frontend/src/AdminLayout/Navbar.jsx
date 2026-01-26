import { Link } from 'react-router-dom';
import TaskIcon from '@mui/icons-material/Task';
import { useContext } from 'react';
import axios from "axios"
import {toast} from 'react-toastify'
import { AuthContext } from './Context/AuthContext';

export default function Navbar(){
    const {IsloggedIn,setIsloggedIn}=useContext(AuthContext)
   
    const handlelogout = async()=>{
        let res = await axios.get("http://localhost:8003/admin/logout",{withCredentials:true})
        setIsloggedIn(res.data.IsloggedIn)
        toast.success(res.data.message)            
    }

    return(
        <div className="main-navbar flex justify-between items-center px-4 py-3 shadow-sm bg-white">
            {/* Reduced Logo Size */}
            <div className="logo text-gray-800">
              <h1 className='text-xl font-bold flex justify-center items-center gap-1'>
                <TaskIcon fontSize='small' className="text-blue-600"/> 
                Task
              </h1>
            </div>

            {/* Reduced Link Text Size (text-sm) */}
            <div className="flex gap-6 items-center text-sm font-medium text-gray-600"> 
                <Link to="/" className="hover:text-blue-600 transition-colors">
                    Home
                </Link>
                {!IsloggedIn && (
                <>
                <Link to="/admin/signup" className="hover:text-blue-600 transition-colors">
                    Signup
                </Link>
                <Link to="/admin/login" className="hover:text-blue-600 transition-colors">
                    Login
                </Link>
                        </>
                )}
                {IsloggedIn && (
                    <>
                <Link to="/admin/add" className="hover:text-blue-600 transition-colors">
                    Add Agent
                </Link>
                <Link to="/admin/csv" className="hover:text-blue-600 transition-colors">
                    Add Csv
                </Link>
                <Link to="/admin/agentlist" className="hover:text-blue-600 transition-colors">
                   List Agent
                </Link>
                      <button onClick={handlelogout} className="text-red-500 hover:text-red-700 transition-colors">
                    Logout
                </button>
                    </>
                  
                )}
               
            </div>
        </div>   
    )
}