"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


const customerRegisterSchema = z
  .object({
    firstName: z.string().trim().min(2, "Must be at least 2 characters"),
    lastName: z.string().trim().min(2, "Must be at least 2 characters"),
    email: z
      .string()
      .trim()
      .min(1, "Email is required")
      .regex(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address"
      ),
    primaryPhone: z.string().trim().min(6, "Must be a minimum of 6 characters"),
    secondaryPhone: z
      .string()
      .trim()
      .min(6, "Must be a minimum of 6 characters")
      .optional()
      .or(z.literal("")), // allows an empty string
    address: z
      .string()
      .trim()
      .min(6, "Must be a minimum of 6 characters"),
    city: z.string().trim().min(1, "It must not be empty"),
    region: z.string().trim().min(1, "It must not be empty"),
    country: z.string().trim().min(1, "It must not be empty"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  });

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
          Personal information
        </h1>
        {/* Display root/server errors */}
        {errors.root?.serverError && (
          <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-lg">
            {errors.root.serverError.message}
          </div>
        )}
        <div className="grid grid-cols-12 grid-rows-12 gap-x-5">
          <div className="col-span-12 row-span-6 lg:col-span-6 lg:row-span-12">
            <label className="block" htmlFor="firsName">
              First Name
            </label>
            <input
              {...register("firstName")}
              id="firstName"
              name="firstName"
              placeholder="Enter First name"
              className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] 
          mb-8
          placeholder-[#A1A7C4] text-black rounded-lg"
            />
            {errors.firstName && (
              <span className="text-red-300">{errors.firstName?.message}</span>
            )}
          </div>
          <div className="col-span-12 row-span-6 lg:col-span-6 lg:row-span-12">
            <label className="block" htmlFor="lastName">
              Last Name
            </label>
            <input
              {...register("lastName")}
              name="lastName"
              placeholder="Enter Last name"
              className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] 
          mb-8
          placeholder-[#A1A7C4] text-black rounded-lg"
            />
            {errors.lastName && (
              <span className="text-red-300">{errors.lastName?.message}</span>
            )}
          </div>
        </div>
        <div className="lg:w-full">
          <label className="block" htmlFor="primaryPhone">
            Phone Number
          </label>
          <input
            {...register("primaryPhone")}
            id="primaryPhone"
            name="primaryPhone"
            placeholder="Enter phone number"
            type="tel"
            className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] 
          mb-8
          placeholder-[#A1A7C4] text-black rounded-lg"
          />
          {errors.primaryPhone && (
            <span className="text-red-300">{errors.primaryPhone?.message}</span>
          )}
        </div>
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
          <label className="block" htmlFor="address">
            Address
          </label>
          <textarea
            {...register("address")}
            name="address"
            id="address"
            placeholder="No 17 Adankolo road, lokogoma, Lokoja, Kogi state."
            className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] 
          mb-8
          placeholder-[#A1A7C4] text-black rounded-lg"
          />
          {errors.address && (
            <span className="text-red-300">{errors.address?.message}</span>
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

        <div className="">
          <label className="block" htmlFor="passwordConfirm">
            Confirm Password
          </label>
          <input
            {...register("passwordConfirm")}
            id="passwordConfirm"
            name="passwordConfirm"
            placeholder="Confirm password"
            type="password"
            className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] 
          mb-8
          placeholder-[#A1A7C4] text-black rounded-lg"
          />
        </div>
        {errors.passwordConfirm && (
          <span className="text-red-300">
            {errors.passwordConfirm?.message}
          </span>
        )}
        <button
          type="submit"
          className="text-white bg-black px-6 py-4 rounded-lg"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CustomerRegister;
