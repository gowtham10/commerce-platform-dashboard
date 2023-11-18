export interface NavItemType {
  icon?: string;
  path: string;
  displayName: string;
}

export type NavItemProps = NavItemType & {
  key: string;
  isParentItem?: boolean;
  isExpanded?: boolean;
  children: React.JSX.Element | null;
  isSelected?: boolean;
}

export type NavMenuType = NavItemType & {
  subItems?: NavMenuType[];
}

export interface NavProps {
  navItems: NavMenuType[];
}

export interface SidebarProps {
  navItems: NavMenuType[];
  profileDetails?: any;
}
