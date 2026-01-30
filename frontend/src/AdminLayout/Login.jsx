import { useForm} from "react-hook-form"
import axios from 'axios'
import { toast } from "react-toastify"
import { useContext, useEffect } from "react"
import { AuthContext } from "./Context/AuthContext"
import { useNavigate } from "react-router-dom"
export default function Login(){
        const navigate = useNavigate()
         const { IsloggedIn, setIsloggedIn } = useContext(AuthContext);
    const{
        register,
        handleSubmit,
        watch,
        formState: { errors,isSubmitting },
} =useForm()


const onSubmit = async (data) => {
    try {
        let res = await axios.post("http://localhost:8003/admin/login", data, { withCredentials: true });
        
      
        if (res.data.IsloggedIn) {
            toast.success(res.data.message);
            setIsloggedIn(true);
            navigate("/admin/add", { replace: true });
        }
    } catch (err) {
        toast.error(err.response?.data?.message || "Login failed");
    }
};
return(
    <>
    <div className="login px-4 md:px-0 md:w-full md:h-full md:flex md:justify-center md:items-center md:mt-10 md:mb-10">
            {/*card-main  */}
            <div className="h-full  mb-10 mt-20 md:mb-0 md:mt-0 rounded-sm flex justify-center items-center md:w-100 md:h-full bg-gray-100 md:flex md:justify-center md:rounded-sm md:p-6">
                {/* card */}
                <div className="mt-10 md:mt-0 md:w-96 md:h-full md:rounded-md bg-gray-50 md:pt-5 md:pb-10">
                    <h1 className="text-black text-2xl md:px-3">Login</h1>
                    <span className="mb-5 md:mb-0 flex w-10 border-2 md:flex md:w-10 md:ml-3 border-orange-400"></span>
                    <div className="form md:mt-10">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 md:flex md:flex-col md:gap-8 justify-center items-center">
                            <div className="form-field">
                                <input type="email" name="email" id="email" className="border-2 border-black md:pl-2  rounded-md placeholder:pl-2 h-10 w-80" placeholder="Enter the email..."  {...register("email",{required:"email is required",pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:"Please enter a valid email address"}})} />
                                 {errors.email && <p className="text-red-500 md:pl-1">{errors.email.message}</p>}
                            </div>
                            <div className="form-field md:relative">
                                <input type="password" name="password" id="password" className="border-2 md:pl-2 border-black rounded-md placeholder:pl-2 h-10 w-80" placeholder="Enter the password..."  {...register("password",{required:"password is required",pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,message:"Password must have 8+ chars, 1 uppercase, 1 lowercase, 1 number, and 1 special char"}})} />
                                {errors.password && <p className="text-red-500 text-sm md:pl-2 absolute left-7 px-1 md:px-0 md:absolute md:left-0 ">{errors.password.message}</p>}  
                            </div> 
                            <div className="btn mt-10 md:mt-0 flex flex-col gap-5 md:w-full md:flex md:flex-col md:gap-5 md:h-full md:p-4">
                            <button type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" :"Submit"} className="md:w-80 bg-gray-500 pt-2 pb-2 w-80 text-xl text-white rounded-md md:text-center md:pt-2 md:pb-2">Login</button>
        
                        </div>        
                        </form>
                        {/* btn */} 
                        <div className="extra-fea md:mt-0 md:mb-0 mt-5 mb-10">
                            <a href="/admin/signup" className="text-black underline md:pl-5">New User? Register here</a>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </> 
)
}