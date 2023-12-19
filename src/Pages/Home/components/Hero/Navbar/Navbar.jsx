import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container, Link } from "@mui/material";
import DarkBtn from "./DarkBtn";
import Logo from '../../../../../logo/Picsart_23-12-19_12-43-15-457.png'



const drawerWidth = 200;
const DrawerAppBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [bgColor, setBgColor] = React.useState(false);
  const changeBgColor = () => {
    if (window.scrollY >= 580) {
      setBgColor(true);
    } else setBgColor(false);
  };

  window.addEventListener("scroll", changeBgColor);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography sx={{ my: 2, fontWeight: 900 }}>Byfaith</Typography>
      <Divider />
      <List sx={{ mx: 6 }}>
        <ListItem>
          <Link href='#' style={linkStyle}>
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link href='#' style={linkStyle}>
            Sermon
          </Link>
        </ListItem>
        <ListItem>
          <Link href='#' style={linkStyle}>
            Ministries
          </Link>
        </ListItem>
        <ListItem>
          <Link href='#' style={linkStyle}>
            Event
          </Link>
        </ListItem>
        <ListItem>
          <Link href='#' style={linkStyle}>
            Contact
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ display: "flex", position: "relative" }}>
        <AppBar
          sx={{
            bgcolor: bgColor ? "black" : "rgba(30,40,10,.3)",
          }}
          elevation={0}
        >
          <Container maxWidth="lg">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "block", fontWeight: 800 },
                }}
              >
                <Link href={'#'}>
                  <img src={Logo} alt="logo"  style={{width:'50px',height:'50px'}}/>
                </Link>
              </Typography>
              <List sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
                <ListItem>
                  <Link href={"#"} style={linkStyle}>
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"#"} style={linkStyle}>
                    Sermon
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"#"} style={linkStyle}>
                    Ministries
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href='#'
                    style={linkStyle}
                  >
                    Event
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href='#'
                    style={linkStyle}
                  >
                    Contact
                  </Link>
                </ListItem>
                <ListItem></ListItem>
              </List>
              <DarkBtn />
            </Toolbar>
          </Container>
        </AppBar>
        <nav>
          <Drawer
            // container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;

const linkStyle = {
  textDecoration: "none",
  color: "white",
};
