import React, { useState } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

import cartStore from "../../store/CartStore";
import { ABOUT_PATH, COLLECTION_PATH, LOTTERY_PATH } from "../../utils/consts";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

const Header: React.FC = observer(() => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const drawer = (
    <div onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle}>
      <List>
        <ListItem button component={Link} to={COLLECTION_PATH}>
          <ListItemText primary="Apple" />
        </ListItem>
        <ListItem button component={Link} to={LOTTERY_PATH}>
          <ListItemText primary="Lottery" />
        </ListItem>
        <ListItem button component={Link} to={ABOUT_PATH}>
          <ListItemText primary="About" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/cart">
          <ShoppingCartIcon />
          <ListItemText primary={`Cart (${cartStore.count})`} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <div className="bg-green-800 mb-4 py-2" style={{ color: "white" }}>
        <Toolbar className="container mx-auto flex justify-between items-center">
          <h6 className="text-white" style={{ color: "white" }}>
            <Link to={COLLECTION_PATH}>
              <img
                src={require("../../static/plug_logo.avif")}
                alt="Plug Logo"
                className="h-10"
              />
            </Link>
          </h6>
          <div className="hidden md:flex space-x-4">
            <Button color="inherit" component={Link} to={COLLECTION_PATH}>
              Apple
            </Button>
            <Button color="inherit" component={Link} to={LOTTERY_PATH}>
              Lottery
            </Button>
            <Button color="inherit" component={Link} to={ABOUT_PATH}>
              About
            </Button>
          </div>
          <div className="flex space-x-4 items-center">
            <div className="md:hidden">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <div className="hidden md:block relative">
              <IconButton
                color="inherit"
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
              >
                <AccountCircleIcon />
              </IconButton>
              {profileMenuOpen && <ProfileMenu />}
            </div>
            <IconButton
              color="inherit"
              component={Link}
              to="/cart"
              className="relative"
            >
              <ShoppingCartIcon />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full px-2 text-xs">
                {cartStore.count}
              </span>
            </IconButton>
          </div>
        </Toolbar>
      </div>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileMenuOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </div>
  );
});

export default Header;
