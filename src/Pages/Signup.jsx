import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import FormInput from "../Components/Signup Login/FormInput";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-col justify-center items-center gap-4 mt-24 ">
        <form className="w-[45rem] px-20 py-20 flex flex-col justify-center items-center gap-4 bg-deepTeal rounded-lg">
          <h1 className="text-4xl font-bold text-white">Signup</h1>
          <FormInput name="Full Name" type="text" />
          <FormInput name="Email" type="email" />
          <FormInput name="Password" type="password" />
          <FormInput name="Confirm Password" type="password" />
          <button type="submit" className="w-full bg-gold text-white font-bold py-4 rounded-lg">Create Account</button>
        <p className="text-white">Already have an account? <Link to="/login" className="text-gold">Login</Link></p>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
