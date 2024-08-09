import React from "react";
import { CreateCategoryForm } from "../../components/create-category-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEditCategory } from "../category-list/service/mutation/useEditCategory";
import { toast } from "react-toastify";
import { useSingleCategory } from "../category-list/service/query/useSingleCategory";
import { Loading } from "../../components/loading";

export const EditCategory = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useSingleCategory(id);
  const { mutate } = useEditCategory(id);

  const submit = (value) => {
    mutate(value, {
      onSuccess: () => {
        navigate(-1);
        toast.success("category muvaffaqiyatli o'zgartirildi!");
      },
    });
  };
  return (
    <>
      {isLoading ? (
        <Loading/>
      ) : (
        <CreateCategoryForm submit={submit} {...data} />
      )}
    </>
  );
};
