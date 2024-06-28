import "./Header-module.css";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export const Header = ({ isMobile, isTablet }: any) => {
  const [show, setShow] = useState(false);

  return (
    <header className="header" style={isMobile || isTablet ? { justifyContent: "right" } : {}}>
      <div className="logo">Logo</div>
      {isMobile || isTablet ? (
        <>
          <button onClick={() => setShow(true)}>
            <MenuIcon color="primary" sx={{ fontSize: 60 }} />
          </button>
          <Drawer anchor={"right"} open={show} onClose={() => setShow(false)}>
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={() => setShow(false)}
              onKeyDown={() => setShow(false)}
            >
              <ul className="nav" style={{ flexDirection: "column", alignItems: "start" }}>
                {HeaderBar.map((el) => (
                  <li key={el.path}>
                    <Link to={el.path} style={{ fontSize: 22 }}>
                      {el.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Box>
          </Drawer>
        </>
      ) : (
        <ul className="nav">
          {HeaderBar.map((el) => (
            <li key={el.path}>
              <Link to={el.path}>{el.label}</Link>
            </li>
          ))}
        </ul>
      )}
      <Link to="/cart" className="cart-link">Cart</Link>
    </header>
  );
};

const HeaderBar = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "FAQ", path: "/faq" },
  { label: "How to Use", path: "/how-to-use" },
  { label: "Advantages", path: "/advantages" },
  { label: "Feedback", path: "/feedback" },
];
