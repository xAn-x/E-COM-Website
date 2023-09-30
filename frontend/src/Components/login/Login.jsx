import { TextField, Button, Typography, styled } from "@mui/material";

import { authenticateLogin } from "../../Services/api";


const LoginButton = styled(Button)`
  text-transform: none;
  background: #f86418;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const RequestOTPButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #d24848;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0px 2px 4px 0px rgb(0 0 0/20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const ErrorField = styled(Typography)`
  padding-top: 50px;
  font-size: 15px;
  color: red;
  text-align: center;
  font-family: monospace;
  font-weight: 600;
`;

async function loginUser(userData, setAccount, handleClose) {
  const response = await authenticateLogin(userData);
  if (response.status === 200) {
    setAccount(userData.Username);
    handleClose();
  } else {
    const errorField = document.getElementById("errorField");
    errorField.textContent = "Invalid Login Credentials";
  }
}

export default function Loginp(props) {
  const onInputChange = (event) => {
    props.setLogin({ ...props.login, [event.target.name]: event.target.value });
  };
  return (
    <>
      <TextField
        variant="standard"
        label="Enter Username"
        name="Username"
        onChange={(event) => onInputChange(event)}
      />
      <TextField
        variant="standard"
        label="Enter Password"
        name="Password"
        onChange={(event) => onInputChange(event)}
      />
      <Text>By continuing, you agree to AMAZEKART's terms and conditions.</Text>
      <LoginButton
        onClick={() =>
          loginUser(props.login, props.setAccount, props.handleClose)
        }
      >
        Login
      </LoginButton>
      <Typography style={{ textAlign: "center" }}>OR</Typography>
      <RequestOTPButton>Request OTP</RequestOTPButton>
      <CreateAccount onClick={() => props.setView("createAccount")}>
        New to amazekart? create an account
      </CreateAccount>
      <ErrorField id="errorField"></ErrorField>
    </>
  );
}
