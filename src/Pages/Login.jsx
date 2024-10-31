import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import FormInput from "../Components/Signup Login/FormInput";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-col justify-center items-center gap-4 mt-24 ">
        <form className="w-[45rem] px-20 py-20 flex flex-col justify-center items-center gap-4 bg-deepTeal rounded-lg">
          <h1 className="text-4xl font-bold text-white">Login</h1>
          <FormInput name="Email" type="email" />
          <FormInput name="Password" type="password" />
          <button type="submit" className="w-full bg-gold text-white font-bold py-4 rounded-lg">Login</button>
          <p className="text-white">Forgot password? <Link to="/reset-password" className="text-gold">Reset Password</Link></p>
          <Link to="/signup" className="text-white">Don't have an account? <span className="text-gold">Signup</span></Link>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
