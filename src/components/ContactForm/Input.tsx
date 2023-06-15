import React from "react";
import { useForm, useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const schema = yup
  .object({
    firstName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number(),
    message: yup.string().required(),
  })
  .required();

interface InputProps {
  registerName: "firstName" | "email" | "phone" | "message";
  name: string;
  placeholder: string;
  type: string;
  isTextarea: boolean;
}

export const Input = ({
  registerName,
  name,
  placeholder,
  type,
  isTextarea,
}: InputProps) => {
  const { register, formState } = useFormContext();
  const error = formState.errors[name];
  return (
    <div className="flex flex-col">
      <label
        className="capitalize text-secondary py-2 mt-4 text-xl"
        htmlFor={registerName}
      >
        {name}
      </label>
      {!isTextarea ? (
        <input
          className="p-2 bg-[#111111] placeholder-gray-300"
          type={type}
          {...register(registerName)}
          placeholder={placeholder}
        />
      ) : (
        <textarea
          className="p-2 bg-[#111111] placeholder-gray-300"
          {...register(registerName)}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};
