import { useRef, useState } from "react";
import Header from "./Header";
import { Validate } from "../utils/Validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/useSlice";

const Login = () => {
    const [isSignIn,setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleAuthentication = ()=>{

        // validate the data
        const message = Validate(email?.current?.value,password?.current?.value);
        setErrorMessage(message);
       
        if(message) return;

       // write the logic for the sign-in or sign-up 
       if(!isSignIn){

        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAb1BMVEUNfoD///8Ae30Adnj7/f0AcHLt9PSiw8P2+vpTnZ7y+Pjl8PCBsrMAdHdMl5kxioy+29upzc7U5OS91tdaoqN3qKmIr7CJubqSvb6x0dIxhIZEjI48h4hhoKGaxMXO5OR6tbZvrrA9k5Uah4nK2tuXb2ZTAAAD90lEQVR4nO3bYXeqIBwGcAVyJqaJOTGHpvb9P+PVWlsmnVZ4cTvn+b2698X47xkIKug4AAAAAAAAAAAAAAAAAAAAAAAAALMiJwuVduYs3Te1L6Oo3DvW8/QFP8r1jKVJrKraZ8ytKxVbjUOcOEu4y1hQS9XNUZmqred+YmlmMQ1xDttLZZcnETVvMePuFR46ttKQuPKuS4udaZpNOGrQdb3cUt+QfeWPS/O1WRqiuHuDZ5bChP5taVGalCZdetug625jK2kiMS2dmIwK2kw6pp8FQith5LSyy00mAVpoWnQTG3PAvtZUZm+blxsk8VbTosuNhu4PS3/oKrvp639HOr38T9YWwuy0lUX7epgs0Da5sxDmoA8TIczgFw6z18OQWDeluIGNCaDUhtka3G4SzZrZt7i3MTVrB0Vhss7c3pmd2Fk0K01lrgzCaMeZwbh9pnSk6ZrUqEnaTLrGt9MxuvnM9LZ5k9/Mzqyy9giQsHHpQL1+M3NukuSjvvEqO/fMQ+m4GD0EeKFhlr7JzU58dQ4TIbX52CzFV+d42/VqhjZpm6fCY77PU9nafaFBoreU+z7zRBrG5q8ATm1SJ8re399VZ7FbLqU71VfOIme+0oTQwRJvAZerDAAAAAAAAAAAAPAyQpc6WDk7Qh2VZdEyceat2reWFdzzRD7L4cYni9Ouo/NsQQz6XknPO5yBnK3RHxdvi1qkajNLnP5aUenX7p3RfvMraHPaamNFa77XRVZOU1/vBkrb4+yyd+fldGN08fRRwpsd9MpumFVyVTuPXp0L+ol4r6aH96qZf9sH6OhwpZeo54+LD0fm96oSbJLFz+xeM/TmpCirpSqf2JPsr3inVPl2cnh2aCuxtnN/Nhpmn3PQUWYtofRRD532TjsVJrX+bFhgO4tDWs3flHl1kqto79xLNORwulKFw2a5NonrFZn9NZNK3VmofrxzkVZStR1drVb0YkOH/5IuyvIqFVx/9nD46bTpNkvczSjtqduhg3yfcyGORXU4NOvBrjmEb4kQgnuBP73gvweYiq19hTBCSHzQnBcfhQqCwDvp/8HuhzjjibL/7c51HO25u5fwsF2mU77jbEhzb7A9I0h3q0UulUmcXRHcmZl+hAVCtjPefZuhq07W92baB3xey/g3dMq34VhSdXw6TyCOcoFDVA+R4YFEFj/uoGE1SsL28e3CQvrFvWszmaTi7pL4iR8LmamY/NYkZ6c3K3GUhbLY8v5p/mptYaxfcXgfowqzqOxm/cT0/yHDiHPijzJSTZiHb2cyzA9KReXH/g++Tbp8Wfz1W5PPL37/VgwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPi9/gH7gDBYPxaZ2QAAAABJRU5ErkJggg=="
                  }).then(() => {
                    const {uid,email,displayName,photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                    navigate("/browse");
                  }).catch((error) => {
                    navigate("/");
                  });
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            

                if(errorCode=="auth/invalid-credential"){
                    setErrorMessage("Please Provide a valid EmailId and Password");
                }else{
                    setErrorMessage(errorCode+"-"+errorMessage);
                }
                navigate("/");
            });

       }else{

        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          if(errorCode=="auth/invalid-credential"){
            setErrorMessage("Please Provide a valid EmailId and Password");
        }else{
            setErrorMessage(errorCode+"-"+errorMessage);
        } 
          navigate("/");
           });
      
    }




    }

   const toggleHandleSignIn =()=>{
        setIsSignIn(!isSignIn);
   }

    return (
        <div className="relative h-screen">

            {/* Background Image */}
            <div className="absolute">
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
                    <input type="text" ref={name} placeholder="Enter your Name" className="p-4 my-4 w-full bg-gray-700 rounded-xl" />
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