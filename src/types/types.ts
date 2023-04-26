import { ElementType } from "react";

export interface SidebarItem {
  id: number;
  title: string;
  icon: any;
  path?: string;
  nestedItems?: SidebarItem[] | false;
}
