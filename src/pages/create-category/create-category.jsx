import React from "react";
import { CreateCategoryForm } from "../../components/create-category-form";
import { useCreateCategory } from "../category-list/service/mutation/useCreateCategory";
import { useNavigate } from "react-router-dom";
import { useCategoryList } from "../../service/query/useCategoryList";
import { toast } from "react-toastify";
import { Loading } from "../../components/loading";

export const CreateCategory = () => {
  const { mutate } = useCreateCategory();
  const navigate = useNavigate();
  const { data, isLoading } = useCategoryList();

  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/");
        toast.success("category muvaffaqiyatli qo'shildi!");
      },
    });
  };
  return (
    <>
      {isLoading ? (
        <Loading/>
      ) : (
        <CreateCategoryForm submit={submit} />
      )}
    </>
  );
};
