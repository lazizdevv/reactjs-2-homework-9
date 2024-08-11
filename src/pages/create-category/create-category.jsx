import React from "react";
import { CreateCategoryForm } from "../../components/create-category-form";
import { useCreateCategory } from "../category-list/service/mutation/useCreateCategory";
import { useNavigate } from "react-router-dom";
import { useCategoryList } from "../../service/query/useCategoryList";
import { toast } from "react-toastify";
import { Loading } from "../../components/loading";
import { useQueryClient } from "@tanstack/react-query";

export const CreateCategory = () => {
  const { mutate } = useCreateCategory();
  const navigate = useNavigate();
  const { data, isLoading } = useCategoryList();
  const client = useQueryClient()

  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/category-list");
        toast.success("category muvaffaqiyatli qo'shildi!");

        client.invalidateQueries("category-list")
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
