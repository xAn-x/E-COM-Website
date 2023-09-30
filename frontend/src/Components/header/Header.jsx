// NavBarColor=> D24848

//React-packages
import { useState } from "react";
import { Link } from "react-router-dom";

// Material Ui->
import { Box, IconButton, Drawer, List, styled } from "@mui/material";
import { Menu } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// Components and Logos
import logo from "./logo.png";
import CustomButtons from "./CustomButtons";
import SearchBar from "./SearchBar";

// Styling Components
const Navbar = styled("nav")`
  background-color: #d24848;
  position: fixed;
  display: flex;
  align-items: center;
  width: 100vw;
  z-index: 5;
`;

const Logo = styled("img")`
  height: 70px;
  width: 100px;
  margin-right: 55px;
`;

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
    position: "absolute",
    right: "5%",
    top: "5%",
    color: "#ffffff",
  },
}));

const menuStyle = {
  fontSize: "35px",
};

const CustomButtonWrapper = styled("span")(({ theme }) => ({
  margin: "0 5% 0 0",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Header = () => {
  const [drawer, setDrawer] = useState(false);
  const [open, setOpen] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(false);
  const [account, setAccount] = useState(null);

  const handleClose = () => {
    if (account === null) {
      setDrawer(true);
    }
    setDrawer(false);
  };

  const handleOpen = () => {
    setDrawer(true);
  };

  const list = () => (
    <Box style={{ width: 250 }} onClick={handleClose}>
      <List>
        <Box button>
          <CustomButtons
            open={open}
            setOpen={setOpen}
            account={account}
            setAccount={setAccount}
            // loggedIn={loggedIn}
            // setLoggedIn={setLoggedIn}
          />
        </Box>
      </List>
    </Box>
  );
  return (
    <Navbar>
      <Link to="/">
        <Logo src={logo} alt="logo" id="logo" />
      </Link>

      <SearchBar />
      <CustomButtonWrapper>
        <CustomButtons
          open={open}
          setOpen={setOpen}
          account={account}
          setAccount={setAccount}
        />
      </CustomButtonWrapper>

      <MenuButton color="inherit" onClick={handleOpen}>
        {account === null ? (
          <Menu style={menuStyle} />
        ) : (
          <AccountCircleIcon style={menuStyle} />
        )}
      </MenuButton>

      <Drawer open={drawer} onClose={handleClose}>
        {list()}
      </Drawer>
    </Navbar>
  );
};

export default Header;
