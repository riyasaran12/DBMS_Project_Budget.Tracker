import React from 'react'
import loginpageimg from "../../assets/images/loginpageimg.jpg";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
    console.log("Rendering AuthLayout with children:", children); // Debugging
    return (
        <div className="w-screen h-screen flex font-poppins">
            {/* Left Side - Login Form */}
            <div className="w-[60vw] px-12 pt-8 pb-12 flex flex-col justify-center bg-[#E9EFF6]">
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-2">Personal Budget Tracker</h2> 
                {children}
            </div>

            {/* Right Side - Image */}
            <div className="hidden md:flex w-[40vw] h-screen bg-[#F5F7FA] bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
                <div className="w-48 h-48 rounded-[40px] bg-[#3A74B4] absolute -top-7 -left-5" />
                <div className="w-48 h-56 rounded-[40px] border-[20px] border-[#F8C046] absolute top-[30%] -right-10" />
                <div className="w-48 h-48 rounded-[40px] bg-blue-400 absolute -bottom-7 -left-5" />

                <div className="grid grid-cols-1 z-20 w-full flex justify-center">
                    <div className="max-w-[650px] w-full">
                        <LogInPageImgCard
                            icon={<LuTrendingUpDown />}
                            label="Simplify Your Expense & Income Tracking"
                            value="520,000"
                            color="bg-blue-800"
                        />
                    </div>
                </div>

                <img
                    src={loginpageimg}
                    alt="Login Page Illustration"
                    className="w-64 lg:w-[90%] absolute bottom-25 rounded-2xl shadow-lg shadow-blue-400/15"
                />
            </div>
        </div>
    );
};

export default AuthLayout;

const LogInPageImgCard = ({icon, label, value, color}) => {
    return (
        <div className="flex gap-6 bg-white p-5 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-10">
            <div
                className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}
            >
                {icon}
            </div>
            <div>
                <h6 className="text-lg font-semibold text-gray-800">{label}</h6>  
                <span className="text-2xl">₹ {value}</span>
            </div>
        </div>
    );
}
