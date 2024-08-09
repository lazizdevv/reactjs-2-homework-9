import { nanoid } from "nanoid";
import { Home } from "../pages/home";
import { CreateProduct } from "../pages/create-product";
import { CategoryProduct } from "../pages/category-product";
import { CategoryList } from "../pages/category-list";
import { EditProduct } from "../pages/edit-product";
import { CreateCategory } from "../pages/create-category";
import { EditCategory } from "../pages/edit-category";

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
    component: CreateCategory,
    id: nanoid(),
    path: "create-category",
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
  {
    component: EditCategory,
    id: nanoid(),
    path: "edit-category/:id",
  },
];
