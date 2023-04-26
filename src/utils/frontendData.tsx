import { SidebarItem } from "../types/types";
import {
  TableBarTwoTone,
  PointOfSale,
  PublishedWithChangesTwoTone,
  ManageSearchTwoTone,
  ArticleTwoTone,
  MopedTwoTone,
  LocalMallTwoTone,
  RestaurantTwoTone,
  PeopleAltTwoTone,
  PersonAddAlt1TwoTone,
} from "@mui/icons-material";

export const SIDEBAR_DATA: SidebarItem[] = [
  {
    id: 2,
    title: "Mesas",
    icon: <TableBarTwoTone />,
    path: "",
    nestedItems: false,
  },
  {
    id: 1,
    title: "Caixa",
    icon: <PointOfSale />,
    path: "",
    nestedItems: [
      {
        id: 1.1,
        title: "Abrir/fechar caixa",
        icon: <PublishedWithChangesTwoTone />,
        path: "",
        nestedItems: false,
      },
      {
        id: 1.2,
        title: "Histórico",
        icon: <ManageSearchTwoTone />,
        path: "",
        nestedItems: false,
      },
    ],
  },

  {
    id: 3,
    title: "Pedidos",
    icon: <ArticleTwoTone />,
    path: "",
    nestedItems: [
      {
        id: 3.1,
        title: "Consumo no local",
        icon: <RestaurantTwoTone />,
      },
      {
        id: 3.2,
        title: "Retirada",
        icon: <LocalMallTwoTone />,
      },
      {
        id: 3.3,
        title: "Delivery",
        icon: <MopedTwoTone />,
      },
    ],
  },
  {
    id: 4,
    title: "Clientes",
    icon: <PeopleAltTwoTone />,
    nestedItems: [
      {
        id: 4.1,
        title: "Cadastrar cliente",
        icon: <PersonAddAlt1TwoTone />,
      },
      {
        id: 4.1,
        title: "Ranking de Clientes",
        icon: <PersonAddAlt1TwoTone />,
      },
    ],
  },
];
