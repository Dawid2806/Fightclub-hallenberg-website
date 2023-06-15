"use client";
import React, { useState } from "react";
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
  const [isEmailSent, setIsEmailSent] = useState(false);

  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const { reset } = useForm();
  const onSubmit = async (data: FormData) => {
    const { firstName, email, phone, message } = data;
    try {
      const res = fetch("/api/send_email", {
        method: "POST",
        body: JSON.stringify({
          firstName,
          email,
          message,
          phone,
        }),
        headers: {
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
      (await res).json();
      methods.reset();
      setIsEmailSent(true);
    } catch {}
  };

  return (
    <>
      {!isEmailSent ? (
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
      ) : (
        <div className="bg-lime-600 w-2/4 mx-auto py-4">
          <p className="text-2xl text-center">
            Vielen Dank für Ihre Nachricht{" "}
          </p>
        </div>
      )}
    </>
  );
};
