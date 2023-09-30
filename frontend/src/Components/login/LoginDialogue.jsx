import { useState } from "react";

import { Dialog, Box, styled, Typography } from "@mui/material";
import loginImg from "./login.png";

import Login from "./Login";
import CreateAccount from "./CreateAccount";

const LoginBox = styled(Box)`
  height: 90vh;
  display: flex;
`;


const LeftBox = styled(Box)`
  background: #d24848;
  height: 100%;
  width: 40%;
  position:relative;
`;

const Image = styled('img')`
  position:absolute;
  top:65%;
  border-right:1px solid lightgrey;
`;



const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 30px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const signupInitialValues = {
  Firstname: "",
  Lastname: "",
  Username: "",
  Email: "",
  Password: "",
  Phone: "",
};

const loginInitialValue = {
  Username: "",
  Password: "",
};

export default function LoginDialogue(props) {
  const [view, setView] = useState("login");
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValue);

  const handleClose = () => {
    props.setOpen(false);
    setView("login");
  };

  return (
    <Dialog open={props.open} onClose={handleClose}>
      <LoginBox>
        <LeftBox>
          <Typography
            variant="h5"
            style={{ padding: "25px 25px", fontWeight: "600", color: "#fff" }}
          >
            LOGIN
          </Typography>
          <Typography
            style={{
              padding: "0px 25px 25px",
              fontWeight: "600",
              color: "#fff",
            }}
          >
            Get access to your Orders,Wishlists and Recommendations
          </Typography>
          <Image src={loginImg} alt="loginImage" id="login-img" />
        </LeftBox>
        <Wrapper>
          {view === "login" ? (
            <Login
              setView={setView}
              login={login}
              setLogin={setLogin}
              setAccount={props.setAccount}
              handleClose={handleClose}
            />
          ) : (
            <CreateAccount
              setView={setView}
              setSignup={setSignup}
              signup={signup}
              handleClose={handleClose}
              setAccount={props.setAccount}
            />
          )}
        </Wrapper>
      </LoginBox>
    </Dialog>
  );
}
