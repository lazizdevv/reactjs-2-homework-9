import React from "react";
import { CreateForm } from "../../components/create-form";
import { useCreateProduct } from "../../service/mutation/useCreateProduct";
import { useNavigate } from "react-router-dom";
import { useCategoryList } from "../../service/query/useCategoryList";
import { toast } from "react-toastify";
import { Loading } from "../../components/loading";

export const CreateProduct = () => {
  const { data, isLoading } = useCategoryList();
  const { mutate } = useCreateProduct();
  const navigate = useNavigate();

  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        navigate(-1);
        toast.success("product muvaffaqiyatli qo'shildi!");
      },
    });
  };
  return (
    <>
      <div className="container">
        {isLoading ? (
          <Loading />
        ) : (
          <CreateForm categeoryData={data} submit={submit} />
        )}
      </div>
    </>
  );
};
