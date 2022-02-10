import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface ISignUpFormInput {
  username: string;
  lastName: string;
  iceCreamType: { label: string; value: string };
}

const Signup = () => {
  const { register, handleSubmit } = useForm<ISignUpFormInput>();
  const handleSignUpSubmit: SubmitHandler<ISignUpFormInput> = (data) => {
    console.log(data);
  };
  return (
    <>
      <form noValidate onSubmit={handleSubmit(handleSignUpSubmit)}>
        <TextField id="username" label="Username" {...register("username", { required: { value: true, message: "Please enter a username" } })} />
        <Button type="submit" variant="contained">
          Sign up
        </Button>
      </form>
    </>
  );
};

export default Signup;
