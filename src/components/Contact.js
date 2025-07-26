
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const schema = Yup.object({
        name: Yup.string("Invalid name!")
            .required(" Please enter your name! ")
            .min(3, "The name must have at least 3 letters."),
        email: Yup.string()
            .required(" Email is required! ")
            .email("Invalid email adress"),
        message: Yup.string()
            .required("Enter your massage")
            .min(5, "The message must have at least 5 letters."),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = data => {
        console.log("Sent:", data);
        reset();
    };

    const navigate = useNavigate();
    return (
        <div className="max-w-xl mx-auto mt-8 bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Contact Us</h1>



            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name Field */}
                <div>
                    <label className="block mb-1 font-semibold text-gray-700">Name</label>
                    <input
                        type="text"
                        {...register("name")}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <div className="min-h-[18px] mt-1">
                        {errors.name && (
                            <p className="text-sm text-red-500">{errors.name.message}</p>
                        )}
                    </div>
                </div>

                {/* Email Field */}
                <div>
                    <label className="block mb-1 font-semibold text-gray-700">Email</label>
                    <input
                        type="email"
                        {...register("email")}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <div className="min-h-[18px] mt-1">
                        {errors.email && (
                            <p className="text-sm text-red-500">{errors.email.message}</p>
                        )}
                    </div>
                </div>

                {/* Message Field */}
                <div>
                    <label className="block mb-1 font-semibold text-gray-700">massage</label>
                    <textarea
                        rows="4"
                        {...register("message")}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md  resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <div className="min-h-[18px] mt-1">
                        {errors.message && (
                            <p className="text-sm text-red-500">{errors.message.message}</p>
                        )}
                    </div>
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-2">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition hover:scale-105">
                        Send
                    </button>
                    <button
                        type="reset"
                        className="w-full bg-red-400 text-white py-2 rounded-xl hover:bg-red-600 transition hover:scale-105">
                        Send
                    </button>
                </div>
            </form>
            {isSubmitSuccessful && (
                navigate("/Thanks")
            )}
        </div>
    );
}

