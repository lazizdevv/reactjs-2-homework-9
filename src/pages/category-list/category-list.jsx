import React from "react";
import { useCategoryList } from "../../service/query/useCategoryList";
import { CategoryCard } from "../../components/category-card";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";

export const CategoryList = () => {
  const { data } = useCategoryList();

  return (
    <div className="flex flex-col gap-5">
      <Link className="w-1/2 mx-auto " to={"/create-category"} >
        <Button
          children={"Create Category"}
          variant="success"
          className="w-full"
        />
      </Link>
      <div className="grid lg:grid-cols-1 gap-5">
        {data?.map((item) => (
          <CategoryCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
