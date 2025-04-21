import { useState, useEffect, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Header.css";
import { toTitleCase } from "../../utils/custom_string";
import course from "../../data/main_data";
import { NavLink } from "react-router-dom";
import { logo } from "../../utils/message";

export const Header = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const [visibleFolders, setVisibleFolders] = useState<string[]>([]);
  const [overflowFolders, setOverflowFolders] = useState<string[]>([]);
  const offCanvasRef = useRef<HTMLDivElement>(null);
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const calculateFolders = () => {
      const headerEl = document.querySelector("header");
      if (!headerEl || !navRef.current) return;

      const containerWidth = headerEl.clientWidth;
      const homeLink = navRef.current.querySelector("li") as HTMLLIElement;
      const toggleBuffer = 60; // space for menu toggle

      let usedWidth = homeLink?.offsetWidth || 0;
      const visible: string[] = [];
      const overflow: string[] = [];

      Object.keys(course).map((courseName) => {
        const temp = document.createElement("span");
        temp.style.visibility = "hidden";
        temp.style.position = "absolute";
        temp.style.whiteSpace = "nowrap";
        temp.style.fontSize = "1rem";
        temp.style.fontWeight = "500";
        temp.style.padding = "8px 15px";
        temp.innerText = courseName;
        document.body.appendChild(temp);

        const folderWidth = temp.offsetWidth + 300; // padding and margin
        document.body.removeChild(temp);

        if (usedWidth + folderWidth + toggleBuffer <= containerWidth) {
          visible.push(courseName);
          usedWidth += folderWidth;
        } else {
          overflow.push(courseName);
        }
      });

      setVisibleFolders(visible);
      setOverflowFolders(overflow);
    };

    calculateFolders();
    window.addEventListener("resize", calculateFolders);
    return () => window.removeEventListener("resize", calculateFolders);
  }, [course]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const event = new Event("resize");
      window.dispatchEvent(event);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (overflowFolders.length <= 0) {
      setShowOffCanvas(false);
    }
  }, [overflowFolders]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        showOffCanvas &&
        offCanvasRef.current &&
        !offCanvasRef.current.contains(event.target as Node)
      ) {
        setShowOffCanvas(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showOffCanvas]);

  return (
    <>
      <header className={`header ${isHomePage ? "home" : "course"}`}>
        <NavLink to="/" className="logo">
          {logo}
        </NavLink>

        <ul ref={navRef} className="nav-links">
          <li key="Home">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          {visibleFolders.map((folder) => (
            <li key={folder}>
              <NavLink to={`/${folder}`}>{toTitleCase(folder)}</NavLink>
            </li>
          ))}
          {overflowFolders.length > 0 && (
            <li className="menu-toggle" onClick={() => setShowOffCanvas(true)}>
              <MenuIcon />
            </li>
          )}
        </ul>
      </header>
      {showOffCanvas && (
        <div className="off-canvas-glass" ref={offCanvasRef}>
          <div className="off-canvas-header">
            <h3>More Folders</h3>
            <span>
              <CloseIcon onClick={() => setShowOffCanvas(false)} />
            </span>
          </div>
          <ul className="off-canvas-list">
            {overflowFolders.map((folder) => (
              <li key={folder}>
                <NavLink
                  to={`/${folder}`}
                  onClick={() => {
                    setShowOffCanvas(false);
                  }}
                >
                  {toTitleCase(folder)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
