"use client";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, schema } from "./Input";
import { useForm, FormProvider } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  message: string;
};

export const ContactForm = () => {
  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
    try {
      const response = await fetch("/api/elo", {
        method: "POST",
        body: JSON.stringify({ data }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Something went wrong!");
      }

      console.log(responseData.message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col p-6 lg:w-2/4 lg:mx-auto"
      >
        <Input
          type="text"
          registerName="firstName"
          name="name"
          placeholder="Dein Name"
          isTextarea={false}
        />

        <Input
          type="email"
          registerName="email"
          name="email"
          placeholder="Deine Email"
          isTextarea={false}
        />
        <Input
          type="phone"
          registerName="phone"
          name="telefon"
          placeholder="Deine Telefon"
          isTextarea={false}
        />
        <Input
          type="textarena"
          registerName="message"
          name="nachricht"
          placeholder="Deine Nachricht"
          isTextarea={true}
        />

        <button className="bg-secondary py-2 mt-4 capitalize" type="submit">
          nachricht senden
        </button>
      </form>
    </FormProvider>
  );
};
