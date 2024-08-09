import { nanoid } from "nanoid";
import { Home } from "../pages/home";
import { CreateProduct } from "../pages/create-product/create-product";
import { CategoryProduct } from "../pages/category-product/category-product";
import { CategoryList } from "../pages/category-list/category-list";
import { EditProduct } from "../pages/edit-product/edit-product";

export const routes = [
  {
    component: Home,
    id: nanoid(),
  },
  {
    component: CreateProduct,
    id: nanoid(),
    path: "create-product",
  },

  {
    component: CategoryProduct,
    id: nanoid(),
    path: "category-product/:id",
  },
  {
    component: CategoryList,
    id: nanoid(),
    path: "category-list",
  },
  {
    component: EditProduct,
    id: nanoid(),
    path: "edit-product/:id",
  },
];
