import React, { useState, useContext } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { UserContext } from "../../context/UserContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const { updateUser } = useContext(UserContext);

    const navigate = useNavigate();

    //Handle login form submit
    const handleLogin = async (e) => {
        e.preventDefault(); 
        console.log("Login Attempt", email, password); 

        if(!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if(!password) {
            setError("Please enter the password");
            return;
        }

        setError("");

        //Login API Call
        try {
            const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
              email,
              password,
            });
            const { token, user } = response.data;
          
            if (token) {
              localStorage.setItem("token", token);
              updateUser(user);
              navigate("/dashboard");
            }
          } catch (error) {
            if (error.response && error.response.data.message) {
              setError(error.response.data.message);
            } else {
              setError("Something went wrong. Please try again.");
            }
          }
    };
    

    return (
        <AuthLayout>
            <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center font-poppins">
                <h3 className="text-3xl font-semibold text-black">Welcome Back!</h3>  
                <p className="text-lg md:text-xl text-slate-700 mt-[5px] mb-6">
                    Type in your login info to proceed
                </p>

                <form onSubmit={handleLogin}>
                    <Input 
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        label="Email Address"
                        placeholder="xyz@gmail.com"
                        type="text"
                    />

                    <Input 
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                        label="Password"
                        placeholder="Min 8 Characters"
                        type="password"
                    />

                    {error && <p className="text-red-500 text-lg pb-2.5">{error}</p>}

                    <button type="submit" className="btn-primary">
                        LOGIN
                    </button>     

                    <p className="text-sm md:text-[18px] text-slate-800 mt-3">
                        Don't have an account?{" "}
                    <Link className="font-medium text-[18px] md:text-lg text-primary underline" to="/signup">
                        SignUp
                    </Link>
                    </p>
                </form>
            </div>
        </AuthLayout>
    )
}

export default Login;
