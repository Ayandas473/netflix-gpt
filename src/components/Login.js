import { useRef, useState } from "react";
import Header from "./Header";
import { Validate } from "../utils/Validate";

const Login = () => {
    const [isSignIn,setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const handleAuthentication = ()=>{

        // validate the data
        const message = Validate(email?.current?.value,password?.current?.value);
        setErrorMessage(message);
    }

   const toggleHandleSignIn =()=>{
        setIsSignIn(!isSignIn);
   }

    return (
        <div className="relative h-screen">

            {/* Background Image */}
            <div className="absolute inset-0">
                <img 
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg"
                    alt="background"
                    className="w-full h-full object-cover"
                />
            </div>
            <Header />

            {/* Form */}
            <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black bg-opacity-75 my-36 mx-auto left-0 right-0 text-white rounded-lg z-10">
                <h1 className="font-bold text-3xl py-4">
                    {isSignIn ? "Sign In":"Sign Up"}
                </h1>
                {
                    !isSignIn &&
                    <input type="text" placeholder="Enter your Name" className="p-4 my-4 w-full bg-gray-700 rounded-xl" />
                }
                <input type="text" ref={email} placeholder="Enter Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-xl" />
                <input type="password" ref={password} placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-xl" />
                <p className="font-bold text-red-600 py-2 text-lg">{errorMessage}</p>
                <button className="p-4 my-6 bg-red-600 w-full rounded-lg" onClick={handleAuthentication}>
                {isSignIn ? "Sign In":"Sign Up"}
                </button>
                <p className="p-2 m-2 cursor-pointer" onClick={toggleHandleSignIn}>
                {isSignIn ? "New to Netflix? Sign Up Now":"Already a User? Sign In Now"}
                    </p>
            </form>
        </div>
    );
};

export default Login;