import { useState } from "react";
import { Box, Typography, styled, Menu, MenuItem } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const UserData = styled(Typography)(({ theme })=>({
background:'#ffffff',
marginLeft: '85px',
marginTop:'5px',
borderRadius:'2px',
minWidth:'70px',
textAlign:'center',
boxShadow:'3px 3px 2px 0px',
fontSize:'18px',
fontWeight:'400',
textTransform: 'none',

[theme.breakpoints.down("md")]:{
  margin:'10px 10px',
  minWidth:'90%',
  borderTop:'2px solid #252525',
  borderLeft:'1px solid #252525',
  boxShadow: "3px 3px 0px 0px",
  color:'#252525',
}
}))

const Component = styled(Menu)`
  margin-top: 5px;
`;

export default function Profile(props) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const logOutUser=()=>{
    props.setAccount(null);
  }
  return (
    <Box 
      onClick={(event) => setOpen(event.currentTarget)}
      style={{cursor:'pointer'}}
    >
      <UserData>{props.account}</UserData>
      <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            logOutUser();
          }}
        >
          <PowerSettingsNewIcon
            color="primary"
            fontSize="small"
            style={{ marginRight: "5px" }}
          />
          <Typography style={{ fontSize: "14px" }}>Logout</Typography>
        </MenuItem>
      </Component>
    </Box>
  );
}
