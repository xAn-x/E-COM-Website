import User from "../model/user-schema.js";

export const userSignUp = async (request, response) => {
  try {
    const exist = await User.findOne({ Username: request.body.Username });
    if (exist) {
      return response.status(401).json({ message: "User already exist" });
    }
    const user = request.body;
    const newUser = new User(user);
    await newUser.save();
    response.status(200).json({ mesage: user });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const userLogIn = async (request, response) => {
  try {
    let user = await User.findOne({
      Username: request.body.Username,
      Password: request.body.Password,
    });
    if (user) {
      return response
        .status(200)
        .json(`${request.body.Username} login successfull`);
    } else {
      return response.status(401).json("Invalid Login Credentials");
    }
  } catch (error) {
    response.json("Error: ", error.message);
  }
};