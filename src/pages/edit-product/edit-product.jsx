import React from "react";
import { CreateForm } from "../../components/create-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEditProduct } from "../../service/mutation/useEditProduct";
import { useSingleData } from "../../service/query/useSingleData";

export const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useSingleData(id);
  const { mutate } = useEditProduct(id);

  const submit = (value) => {
    mutate(value, {
      onSuccess: () => {
        navigate(-1);
      },
    });
  };

  return (
    <>
      {isLoading ? (
        <h1>loading!!!</h1>
      ) : (
        <CreateForm submit={submit} {...data} />
      )}
    </>
  );
};
