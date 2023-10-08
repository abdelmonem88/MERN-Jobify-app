/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

interface NavLinksProps {
  isBigSidebar: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ isBigSidebar }) => {
  const { user, toggleSidebar } = useDashboardContext() ?? {};

  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        // admin user
        return (
          <NavLink
            to={path}
            key={text}
            onClick={isBigSidebar ? undefined : toggleSidebar}
            className="nav-link"
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;