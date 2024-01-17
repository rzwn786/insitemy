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
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Product",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "INReport",
        path: "/inreport",
        newTab: false,
      },
      {
        id: 32,
        title: "InArk",
        path: "/inark",
        newTab: false,
      },
      {
        id: 33,
        title: "INCHEQS",
        path: "/incheqs",
        newTab: false,
      },
      {
        id: 34,
        title: "InGateway",
        path: "/ingateway",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Our Service",
    path: "/ourservices",
    newTab: false,
  },
  {
    id: 5,
    title: "Coparate News",
    path: "/blog",
    newTab: false,
  },
  {
    id: 6,
    title: "Support",
    path: "http://211.24.67.12:4433/default.aspx",
    newTab: true,
  },
  {
    id: 7,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
