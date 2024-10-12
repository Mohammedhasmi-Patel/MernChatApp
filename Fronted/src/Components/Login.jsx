import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthProvider";
import { Link } from "react-router-dom";

function Login() {
  const [authUser, setAuthUser] = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState(""); // State for success/error messages
  const [messageType, setMessageType] = useState(""); // 'success' or 'error' to control the message color

  const onSubmit = (data) => {
    const userInfo = {
      email: data.Email,
      password: data.Password,
    };

    axios
      .post("/api/user/login", userInfo)
      .then((response) => {
        if (response.data) {
          setMessage("Login successfully done!");
          setMessageType("success");
          localStorage.setItem("chatApp", JSON.stringify(response.data));
          setAuthUser(response.data);
        }
      })
      .catch((error) => {
        setMessage(`Error: ${error.response.data.error}`);
        setMessageType("error");
      });
  };

  // Automatically hide message after 1 second
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-gray-400 px-6 py-3 rounded-md space-y-3 w-96"
        >
          <h1 className="text-center font-bold text-xl ">
            Chatting <span className="text-green-600">Application</span>
          </h1>
          <h2 className=" font-bold">Login</h2>

          {/* Email */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              {...register("Email", { required: true })}
              type="text"
              className="grow"
              placeholder="Email"
            />
          </label>
          {errors.Email && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}

          {/* Password */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              {...register("Password", { required: true })}
              type="password"
              className="grow"
              placeholder="Password"
            />
          </label>
          {errors.Password && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}

          {/* text and button */}
          <div className="flex justify-between">
            <p>
              New User?
              <Link
                to="/signup"
                className="text-blue-700 font-bold cursor-pointer ml-2"
              >
                SignUp
              </Link>
            </p>
            <input
              type="submit"
              value="Login"
              className="text-white bg-green-500 px-2 py-1 rounded-md cursor-pointer"
            />
          </div>
        </form>

        {/* Popup for success or error message */}
        {message && (
          <div
            className={`absolute top-10 left-1/2 transform -translate-x-1/2 py-2 px-4 rounded-md text-white ${
              messageType === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
