import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { useAuth } from "../AuthContext";
import { pages, loggedin } from "../../constants/constants";
import { Link } from "react-router-dom";
import HeaderButton from "./header-button";
import { useEffect } from "react";
import T77_logo from "../../assets/T77_logo.png";
import "./Header.css";

function Header() {
  // State to manage the anchor element for the navigation menu
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  // Get authentication status from the AuthContext
  const { isAuthenticated } = useAuth();

  // Effect hook to handle component lifecycle actions (here, it's just a placeholder for potential future use)
  useEffect(() => {
    const timeout = setTimeout(() => {}, 500); // Adjust delay as needed

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  // Function to open the navigation menu when the user clicks the menu icon
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  // Function to close the navigation menu
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className={"fixed w-full z-20 top-0 navbar"}>
      {/* AppBar is used for the main navigation bar */}
      <AppBar
        position="static"
        className="z-50 top-0 py-2"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
          position: "sticky",
          backdropFilter: "blur(5px)", // Adds a blur effect to the background
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Box component for flex layout, displayed only on small devices */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              {/* IconButton for the hamburger menu icon on small devices */}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" }, // Display on small devices only
                }}
              >
                {/* Render menu items based on authentication status */}
                {isAuthenticated
                  ? loggedin.map((page) => (
                      <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                        <Typography
                          textAlign="center"
                          textTransform="capitalize"
                        >
                          <Link to={page.link}>{page.name}</Link>
                        </Typography>
                      </MenuItem>
                    ))
                  : pages.map((page) => (
                      <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                        <Typography
                          textAlign="center"
                          textTransform="capitalize"
                        >
                          <Link to={page.link}>{page.name}</Link>
                        </Typography>
                      </MenuItem>
                    ))}
              </Menu>
            </Box>

            {/* Logo in the center for small devices */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to="/" className="sm:visible lg:hidden absolute left-[44%]">
                <img
                  src={T77_logo}
                  className="w-20 h-16 object-contain hover:cursor-pointer mx-auto"
                  alt="Logo"
                />
              </Link>
            </Box>

            {/* Links without the logo for larger devices */}
            <Box
              sx={{
                justifyContent: "center",
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "space-between", // Separate the links with the logo
                  alignItems: "center",
                },
                size: "80%",
              }}
            >
              {/* Render buttons or links based on authentication status */}
              {isAuthenticated
                ? loggedin.map((page) => (
                    <HeaderButton
                      key={page.id}
                      onClick={handleCloseNavMenu}
                      page={page}
                    >
                      <Link to={page.link}>{page.name}</Link>
                    </HeaderButton>
                  ))
                : pages.map((page) => (
                    <HeaderButton
                      key={page.id}
                      onClick={handleCloseNavMenu}
                      page={page}
                    >
                      <Link to={page.link}>{page.name}</Link>
                    </HeaderButton>
                  ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
