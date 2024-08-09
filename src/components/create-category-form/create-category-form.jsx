import React from "react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { useForm } from "react-hook-form";

export const CreateCategoryForm = ({ submit, name, img, id }) => {
  const { handleSubmit, register } = useForm({
    defaultValues: { name, img, id },
  });

  return (
    <>
      <div className="flex justify-center mt-10">
        <form
          className="flex flex-col gap-4 lg:gap-10 border max-w-screen-md w-full p-4 lg:py-10 lg:px-10 rounded-lg shadow-lg shadow-blue-300"
          onSubmit={handleSubmit(submit)}
        >
          <Input
            className={
              "border font-bold text-base border-blue-300 focus:border-blue-700 focus:shadow-lg focus:shadow-blue-200"
            }
            register={register}
            name="name"
            placeholder="Category Name"
          />
          <Input
            className={
              "border font-bold text-base border-blue-300 focus:border-blue-700 focus:shadow-lg focus:shadow-blue-200"
            }
            register={register}
            name="img"
            placeholder="Category Img"
          />
          <Button
            className="w-1/2 font-bold py-3 mx-auto mt-5"
            type={"submit"}
            children={"Add Category"}
            variant="success"
          />
        </form>
      </div>
    </>
  );
};
