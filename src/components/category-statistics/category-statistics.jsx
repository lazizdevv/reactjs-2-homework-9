import React from "react";
import { useCategoryList } from "../../service/query/useCategoryList";
import { useGetData } from "../../service/query/useGetData";
import { useQueryClient } from "@tanstack/react-query";
import { Loading } from "../loading/loading";

export const CategoryStatistics = () => {
  const queryClient = useQueryClient();

  const { data: categories, isLoading: isCategoriesLoading } =
    useCategoryList();
  const { data: products, isLoading: isProductsLoading } = useGetData({
    onSuccess: () => {
      queryClient.invalidateQueries("category-list");
    },
  });

  if (isCategoriesLoading || isProductsLoading) return <Loading />;

  const categoriesWithProductCount = categories.map((category) => {
    const productCount = products.filter(
      (product) => product.categoryId == category.id
    ).length;
    return {
      ...category,
      productCount,
    };
  });

  return (
    <>
      <div className="p-6 bg-white shadow-lg shadow-blue-300 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-700 mb-6 border-b-2 border-gray-200 pb-2">
          Category va Product Statistikasi
        </h2>
        <ul className="space-y-4">
          {categoriesWithProductCount.map((category) => (
            <li
              key={category.id}
              className="flex justify-between items-center p-2 border rounded-sm text-gray-600"
            >
              <span className="text-lg font-bold">{category.name}</span>
              <span className="text-lg font-semibold">
                soni: {category.productCount} ta
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
