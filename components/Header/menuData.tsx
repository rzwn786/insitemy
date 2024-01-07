import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 22,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 23,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 24,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Product",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 32,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 33,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 34,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Coparate News",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 6,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 7,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;