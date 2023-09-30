import { TextField, styled, Typography, Button } from "@mui/material";

import { authenticateSignup } from "../../Services/api";

//To valid the data entered by the user-->
import validator from "validator";

const ContinueButton = styled(Button)`
  text-transform: none;
  background: #f86418;
  color: #fff;
  height: 35px;
  border-radius: 2px;
`;

const Signup = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
  padding-bottom: 10px;
`;

const ErrorField = styled(Typography)`
  font-size: 10px;
  color: red;
`;

async function signupUser(userData, handleClose, setAccount) {
  // As soon as we register the data we are sending a response
  const response = await authenticateSignup(userData);
  if (!response) return;

  setAccount(userData.Username);
  handleClose();
}

function validate(event) {
  const field = event.target.name,
    value = event.target.value,
    errorField = document.getElementById(`${field}-errorField`);

  if (field === "Email") {
    if (!validator.isEmail(value)) {
      errorField.innerText = "Enter a valid email address";
    } else {
      errorField.innerText = "";
    }
  }

  if (field === "Firstname" || field === "Lastname") {
    if (!validator.isAlpha(value))
      errorField.textContent = "Enter a valid name";
    else errorField.textContent = "";
  }

  if (field === "Phone") {
    if (!validator.isInt(value))
      errorField.textContent = "Enter valid phone number";
    else if (value.length !== 10)
      errorField.textContent = "Enter a 10 digit mobile number";
    else errorField.textContent = "";
  }

  if (field === "Password") {
    if (value.length < 8)
      errorField.textContent = "Minimum password length should be 8";
    else errorField.textContent = "";
  }
}

export default function CreateAccount(props) {
  const onInputChange = (event) => {
    validate(event);
    props.setSignup({
      ...props.signup,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <TextField
        variant="standard"
        label="Enter Firstname"
        name="Firstname"
        onChange={(event) => onInputChange(event)}
      />
      <ErrorField variant="standard" id="Firstname-errorField"></ErrorField>
      <TextField
        variant="standard"
        label="Enter Lastname"
        name="Lastname"
        onChange={(event) => onInputChange(event)}
      />
      <ErrorField variant="standard" id="Lastname-errorField"></ErrorField>
      <TextField
        variant="standard"
        label="Enter Username"
        name="Username"
        onChange={(event) => onInputChange(event)}
      />
      <ErrorField variant="standard" id="Username-errorField"></ErrorField>
      <TextField
        variant="standard"
        label="Enter Email"
        name="Email"
        onChange={(event) => onInputChange(event)}
      />
      <ErrorField variant="standard" id="Email-errorField"></ErrorField>
      <TextField
        variant="standard"
        label="Enter Password"
        name="Password"
        onChange={(event) => onInputChange(event)}
      />
      <ErrorField variant="standard" id="Password-errorField"></ErrorField>
      <TextField
        variant="standard"
        label="Enter Phone"
        name="Phone"
        onChange={(event) => onInputChange(event)}
      />
      <ErrorField variant="standard" id="Phone-errorField"></ErrorField>
      <ContinueButton
        onClick={() =>
          signupUser(props.signup, props.handleClose, props.setAccount)
        }
      >
        Continue
      </ContinueButton>
      <Signup onClick={() => props.setView("login")}>
        Have an Account ? Login Now :)
      </Signup>
    </>
  );
}
