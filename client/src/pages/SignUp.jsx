import React from "react";
import { Link } from "react-router-dom";
import { Label, TextInput, Button } from "flowbite-react";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 md:px-12 mx-w-3xl flex-col md:flex-row md:items-center md:justify-center md:gap-3">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold text-4xl dark:text-white ">
            <span className="text-indigo-900 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-200 p-1.5 rounded sm:p-1.5">
              myBLOG
            </span>
          </Link>
          <p className="mt-5 text-sm">
            This is a demo project.You can signup with your email and password
            or with google
          </p>
        </div>
        <div className="flex-1">
          {/* right */}
          <form className="flex flex-col gap-4 ">
            <div>
              <Label value="Your Username" />
              <TextInput type="text" placeholder="username" id="username" />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput type="password" placeholder="password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
