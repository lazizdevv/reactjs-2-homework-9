import React from "react";
import { CreateForm } from "../../components/create-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEditProduct } from "../../service/mutation/useEditProduct";
import { useSingleData } from "../../service/query/useSingleData";
import { toast } from "react-toastify";
import { Loading } from "../../components/loading";

export const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useSingleData(id);
  const { mutate } = useEditProduct(id);

  const submit = (value) => {
    mutate(value, {
      onSuccess: () => {
        navigate(-1);
        toast.success("product muvaffaqiyatli o'zgartirildi!")
      },
    });
  };

  return (
    <>
      {isLoading ? (
        <Loading/>
      ) : (
        <CreateForm submit={submit} {...data} />
      )}
    </>
  );
};
