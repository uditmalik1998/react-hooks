import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        {...register("name", {
          required: {
            value: true,
            message: "Please provide Name",
            maxLength: {
              value: 20,
              message: "Name Should be not more than 10 charaters long",
            },
          },
        })}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        {...register("email", {
          required: "Email should not be empty",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Enter correct email",
          },
        })}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        {...register("password", {
          required: { value: true, message: "Please Enter the password" },
          minLength: {
            value: 8,
            message: "Password should be 8 charater long.",
          },
        })}
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
