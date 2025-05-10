"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import googleIcon from '../../public/svg/signin/icons8-google.svg';
import Image from 'next/image';
const customerRegisterSchema = z
  .object({
    email: z
      .string()
      .trim()
      .min(1, "Email is required")
      .regex(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address"
      ),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    })

function CustomerRegister() {

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(customerRegisterSchema),
  });


  return (
    <div className="px-4 mt-9 lg:px-25 py-5 max-w-238">
      <form>
        <h1 className="text-xl text-[#111111] font-semibold">
          Login
        </h1>
        {/* Display root/server errors */}
        {errors.root?.serverError && (
          <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-lg">
            {errors.root.serverError.message}
          </div>
        )}
  
        <div className="">
          <label className="block" htmlFor="email">
            Email Address
          </label>

          <input
            {...register("email")}
            name="email"
            placeholder="Enter your email"
            type="email"
            className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] 
          mb-8
          placeholder-[#A1A7C4] text-black rounded-lg"
          />
          {errors.email && (
            <span className="text-red-300">{errors.email?.message}</span>
          )}
        </div>


        <div className="">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            {...register("password")}
            id="password"
            name="password"
            placeholder="Enter password"
            type="password"
            className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] 
          mb-8
          placeholder-[#A1A7C4] text-black rounded-lg"
          />
          {errors.password && (
            <span className="text-red-300">{errors.password?.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="text-white bg-black px-6 py-4 rounded-lg"
        >
          Login
        </button>
        <button className="border-gray-400 border-1 border-solid rounded-lg
        flex justify-center items-center gap-x-2 block mt-5 px-6 py-4 bg-black
        text-white
        ">
          <Image src={googleIcon} alt="googleIcon" width={20} height={20} />
          Sign in with Google
        </button>
      </form>
    </div>
  );
}

export default CustomerRegister;
