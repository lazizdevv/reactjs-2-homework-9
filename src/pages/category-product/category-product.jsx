import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProductCard } from "../../components/product-card/product-card";
import { useGetData } from "../../service/query/useGetData";
import { Button } from "../../ui/button";

export const CategoryProduct = () => {
  const { id } = useParams();
  const { data } = useGetData(id);
  return (
    <>
      <div className="flex flex-col gap-5">
        <Link to={"/create-product"} className="w-1/2 mx-auto">
          <Button
            children={"Create Product"}
            variant="success"
            className="px-10 py-3 w-full"
          />
        </Link>
        <div className="grid lg:grid-cols-2 gap-5">
          {data?.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};
