import React from "react";
import { useForm } from "react-hook-form";
import MyButton from "./UI/Button/MyButton";
import '../Styles/MyInput.css';

const AddPersonForm = function ({ create }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    create(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className='myInput'
        {...register("firstName", { required: true })}
        type="text"
        placeholder="First Name"
      />
      <input className='myInput'
        {...register("lastName", { required: true })}
        type="text"
        placeholder="Last Name"
      />
      <input className='myInput'
        {...register("age", { required: true })}
        type="text"
        placeholder="Age"
      />
      <input className='myInput'
        {...register("description", { required: false })}
        type="text"
        placeholder="Description"
      />
      <MyButton type="submit">Add Person</MyButton>
    </form>
  );
};

export default AddPersonForm;
