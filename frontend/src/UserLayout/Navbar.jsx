import TaskIcon from '@mui/icons-material/Task';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <>
            <div className="main-navbar flex justify-between gap-5 items-center  md:flex md:justify-between md:items-center bg-transparent">
            <div className="logo text-black text-3xl pl-2   md:text-4xl md:pl-2">
               <h1 className='text-2xl flex  justify-center items-center'><TaskIcon fontSize='small'/>Task</h1>
            </div>
            <div className="md:flex md:gap-10 md:mr-52 md:text-md text-black font flex gap-4 mr-10"> 
                <Link>
                Home
                </Link>
                <Link>
                Task
                </Link>
            </div>
        </div>   
        </>
    )
}