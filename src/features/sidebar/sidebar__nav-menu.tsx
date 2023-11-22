"use client";
import { NavMenuType, NavProps } from "./sidebar.interface";
import { NavItem } from "./sidebar__nav-item";
import { usePathname } from "next/navigation";

export function NavMenu(props: NavProps) {
  const { navItems } = props;
  const pathName = usePathname();

  const itemsHtml = navItems.map((item: NavMenuType) => {
    const { subItems, path, displayName, icon } = item;
    let subItemsHtml = null;
    let isExpanded = subItems && Array.isArray(subItems) &&
      subItems.some((item) => item.path === pathName);
    let isParent = subItems && subItems.length > 0;

    if (subItems && isExpanded) {
      subItemsHtml = <NavMenu navItems={subItems} />;
    }

    return (
      <NavItem
        key={`${displayName}-${path}`}
        icon={icon}
        path={path}
        displayName={displayName}
        isParentItem={isParent}
        isExpanded={isExpanded}
        isSelected={pathName === path}
      >
        {subItemsHtml}
      </NavItem>
    );
  });

  return (
    <ul>
      {itemsHtml}
    </ul>
  );
}
