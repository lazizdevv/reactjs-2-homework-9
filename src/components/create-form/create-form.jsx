import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

export const CreateForm = ({ submit,categeoryData, categeoryId,name,price,img }) => {
  const { handleSubmit, register } = useForm({
    defaultValues:{name,price,img,categeoryId,categeoryData}
  });
  return (
    <>
      <div className="flex justify-center mt-10">
        <form
          className="flex flex-col gap-0 lg:gap-10 border max-w-screen-md w-full py-10 lg:px-10 rounded-lg shadow-lg shadow-blue-300"
          onSubmit={handleSubmit(submit)}
        >
          <select
            className="w-full p-3 bg-blue-400 font-bold cursor-pointer rounded-lg shadow-md text-white shadow-blue-300"
            {...register("categoryId")}
          >
            {categeoryData?.map((item) => (
              <option
                className="h-10 font-bold bg-blue-400"
                value={item.id}
                key={item.id}
              >
                {item.name}
              </option>
            ))}
          </select>

          <Input
            register={register}
            name="name"
            placeholder="Product Name"
            className={
              "border font-bold text-base border-blue-300 focus:border-blue-700 focus:shadow-lg focus:shadow-blue-200"
            }
          />

          <Input
            register={register}
            name="price"
            type="number"
            placeholder="Product Price"
            className={
              "border font-bold text-base border-blue-300 focus:border-blue-700 focus:shadow-lg focus:shadow-blue-200"
            }
          />

          <Input
            register={register}
            name="img"
            type="text"
            placeholder="Product Image"
            className={
              "border font-bold text-base border-blue-300 focus:border-blue-700 focus:shadow-lg focus:shadow-blue-200"
            }
          />

          <Button
            type={"submit"}
            children={"Add Product"}
            variant="success"
            className="w-1/2 font-bold py-3 mx-auto mt-5"
          />
        </form>
      </div>
    </>
  );
};
