import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AddCsv(){
         const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("file", data.file[0]); 

      const res = await axios.post(
        "http://localhost:8003/task/upload-csv",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      navigate("/")
      toast.success(res.data.message);
    } catch (err) {
  console.log(err.response.data); 
  toast.error(err.response.data.message);
}

  };
    return(
        <>
            <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gradient-to-l from-gray-700 via-gray-300 to-gray-300 rounded-lg p-4 sm:p-6">
        <div className="bg-gradient-to-l from-gray-700 via-gray-300 to-gray-300 rounded-lg p-4 sm:p-6">
          <h1 className="text-black text-2xl font-semibold mb-2">
            Add Csv
          </h1>
          <span className="border-2 border-red-600 block w-10 mb-6"></span>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            {/* Name */}
            <input
              type="file"
                accept=".csv,.xlsx,.xls"
              className="border-2 border-black rounded-md h-10 px-3 w-full"
              {...register("file", {
                required: "file is required",
              })}
            />

           

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gray-600 hover:bg-gray-700 transition text-white text-lg py-2 rounded-md w-full disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
        </>
    )
}