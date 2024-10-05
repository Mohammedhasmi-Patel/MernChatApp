import User from "../Models/User.model.js";

export const signUp = async (req, res) => {
  try {
    const { fullname, email, password, confirmPassword } = req.body;

    // check that password and confirm password is same or not.
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match." });
    }

    // condition for check user already exist
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "user already exist" });
    }

    // everything is fine

    const newUser = new User({
      fullname,
      email,
      password,
    });
    await newUser.save();
    return res.status(201).json({ message: "User Created succesfullly..." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
};
