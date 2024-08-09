import React from "react";
import { useCategoryList } from "../../service/query/useCategoryList";
import { CategoryCard } from "../../components/category-card";
import { Button } from "../../ui/button";

export const CategoryList = () => {
  const { data } = useCategoryList();
  return (
    <div className="flex flex-col gap-5">
      <Button children={"Create Category"} variant="success" className="w-1/2 mx-auto" />
      <div className="grid lg:grid-cols-2 gap-5">
        {data?.map((item) => (
          <CategoryCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
