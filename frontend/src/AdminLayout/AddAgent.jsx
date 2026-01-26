import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

export default function AddAgent() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await axios.post(
      "http://localhost:8003/agent/add",
      data,
      { withCredentials: true }
    );
    toast.success(res.data.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gradient-to-l from-gray-700 via-gray-300 to-gray-300 rounded-lg p-4 sm:p-6">
        <div className="bg-gradient-to-l from-gray-700 via-gray-300 to-gray-300 rounded-lg p-4 sm:p-6">
          <h1 className="text-black text-2xl font-semibold mb-2">
            Add Agent
          </h1>
          <span className="border-2 border-red-600 block w-10 mb-6"></span>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            {/* Name */}
            <input
              type="text"
              placeholder="Enter the name"
              className="border-2 border-black rounded-md h-10 px-3 w-full"
              {...register("name", {
                required: "Name is required",
              })}
            />

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Enter the email..."
                className="border-2 border-black rounded-md h-10 px-3 w-full"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <input
                type="tel"
                placeholder="+91 9876543210"
                className="border-2 border-black rounded-md h-10 px-3 w-full"
                {...register("mobile", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\+\d{1,3}\s?\d{6,14}$/,
                    message: "Enter phone number with country code",
                  },
                })}
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mobile.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Enter the password..."
                className="border-2 border-black rounded-md h-10 px-3 w-full"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                    message:
                      "8+ chars, uppercase, lowercase, number & special char",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

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
  );
}
