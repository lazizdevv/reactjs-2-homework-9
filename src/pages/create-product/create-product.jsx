import React from "react";
import { CreateForm } from "../../components/create-form";
import { useCreateProduct } from "../../service/mutation/useCreateProduct";
import { useNavigate } from "react-router-dom";
import { useCategoryList } from "../../service/query/useCategoryList";

export const CreateProduct = () => {
  const {data,isLoading} = useCategoryList()
  const {mutate} = useCreateProduct()
  const navigate = useNavigate()

  const submit = (data) => {
    mutate(data,{
      onSuccess:() => {
        navigate(-1)
      }
    })
  }
  return (
    <>
      <div className="container">
        {!isLoading && <CreateForm categeoryData={data} submit={submit} />}
      </div>
    </>
  );
};
