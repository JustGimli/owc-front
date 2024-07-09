import React, { useState } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

import "./Header.css";
import cartStore from "../../store/CartStore";
import { ABOUT_PATH, COLLECTION_PATH, LOTTERY_PATH } from "../../utils/consts";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

const Header: React.FC = observer(() => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <header className="bg-green-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={COLLECTION_PATH} className="text-white text-2xl font-bold">
          <img
            src={require("../../static/plug_logo.avif")}
            alt="Plug Logo"
            className="h-10"
          />
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to={COLLECTION_PATH} className="text-white hover:text-gray-300">
            Apple
          </Link>
          <Link to={LOTTERY_PATH} className="text-white hover:text-gray-300">
            Lottery
          </Link>

          <Link to={ABOUT_PATH} className="text-white hover:text-gray-300">
            About
          </Link>
        </nav>
        <div className="flex space-x-4 items-center">
          <Link to="/search" className="text-white hover:text-gray-300">
            <SearchIcon />
          </Link>
          <div className="relative">
            <button
              onClick={() => setProfileMenuOpen(!profileMenuOpen)}
              className="text-white relative hover:text-gray-300"
            >
              <AccountCircleIcon />
            </button>
            {profileMenuOpen && <ProfileMenu />}
          </div>
          <Link to="/cart" className="text-white relative hover:text-gray-300">
            <ShoppingCartIcon />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full px-2 text-xs">
              {cartStore.count}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
});

export default Header;
