import React, { FC, useCallback, useState } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

import startsWith from "lodash/startsWith";

import HomeIcon from "../assets/home.svg";
import ArticlesIcon from "../assets/files.svg";
import CategoriesIcon from "../assets/file-submodule.svg";
import TagIcon from "../assets/tag.svg";
import ProjectsIcon from "../assets/source-control.svg";
import CVIcon from "../assets/person.svg";
import SettingsIcon from "../assets/settings-gear.svg";
import SettingsDialog from "./settings-dialog";

const AppBar: FC<{ location: Location }> = props => {
  const [isSettingsDialogOpen, setSettingsDialogOpen] = useState(false);

  const items: TNavItem[] = [
    {
      to: "/",
      title: "Home",
      icon: <HomeIcon />,
    },
    {
      to: "/articles",
      title: "Articles",
      icon: <ArticlesIcon />,
    },
    {
      to: "/categories",
      title: "Categories",
      icon: <CategoriesIcon />,
    },
    {
      to: "/tags",
      title: "Tags",
      icon: <TagIcon />,
    },
    {
      to: "/projects",
      title: "Projects",
      icon: <ProjectsIcon />,
    },
    {
      to: "/cv",
      title: "CV",
      icon: <CVIcon />,
    },
  ];

  const openSettingsDialog = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setSettingsDialogOpen(true);
  };
  const closeSettingsDialog = useCallback(() => {
    setSettingsDialogOpen(false);
    // TODO: is it possible to re-render?
    window.location.reload();
  }, []);

  return (
    <>
      {isSettingsDialogOpen && (
        <SettingsDialog
          isOpen={isSettingsDialogOpen}
          onClose={closeSettingsDialog}
        />
      )}
      <Nav>
        <ul>
          {items.map(item => (
            <NavItem
              location={props.location}
              key={item.to}
              to={item.to}
              title={item.title}
              icon={item.icon}
            />
          ))}
          <li className="settings">
            <a href="#" title="Settings" onClick={openSettingsDialog}>
              <SettingsIcon />
            </a>
          </li>
        </ul>
      </Nav>
    </>
  );
};

const NavItem: FC<TNavItem & { location: Location }> = props => {
  let isActive = props.to === props.location.pathname;
  if (props.to !== props.location.pathname && props.to !== "/")
    isActive = startsWith(props.location.pathname, props.to);

  return (
    <li>
      <div className={isActive ? "active" : undefined}></div>
      <Link
        to={props.to}
        className={isActive ? "active" : undefined}
        title={props.title}
      >
        {props.icon}
      </Link>
    </li>
  );
};

type TNavItem = {
  to: string;
  title: string;
  icon: JSX.Element;
};

const Nav = styled.nav(props => ({
  display: "flex",
  backgroundColor: props.theme.colors.appBar.backgroundColor,
  flexDirection: "column",
  flexBasis: "48px",
  justifyContent: "space-between",

  "& ul": {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 26px)",
  },

  "& li, li > a": {
    width: 48,
    height: 48,
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: props.theme.colors.appBar.textColor,
    zIndex: 10,
  },

  "& li > a:hover": {
    color: props.theme.colors.appBar.textHoverColor,
  },

  "& li": {
    marginBottom: 4,
  },

  "& li.settings": {
    display: "flex",
    flex: 1,
    alignItems: "flex-end",
  },

  "& li > .active": {
    color: props.theme.colors.appBar.textActiveColor,
  },

  "& li > div.active": {
    position: "absolute",
    left: 0,
    width: 2,
    height: 48,
    borderLeftStyle: "solid",
    borderLeftWidth: 2,
    borderLeftColor: props.theme.colors.appBar.textActiveColor,
  },
}));

export default AppBar;
