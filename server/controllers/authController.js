import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";

// REGISTER USER
export const register = async (req, res) => {
	try {
		const {
			firstName,
			lastName,
			email,
			password,
		} = req.body;

		const salt = await bcrypt.genSalt();
		const passwordHash = await bcrypt.hash(password, salt);

		const newUser = new User({
			firstName,
			lastName,
			email,
			password: passwordHash,
		});

		const savedUser = await newUser.save();
		res.status(201).json(savedUser);

	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// LOGGING IN
export const login = async (req, res) => {
	try{
		const { email, password } = req.body;
		const user = await User.findOne({ email: email });
		
		if (!user) return res.status(400).json({ msg: "User does not exist. " });

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

		const token = jwt.sign({ id: User._id }, process.env.JWT_SECRET);
		delete user.password;
		res.status(200).json({ token, user });

	} catch(err) {
		res.status(500).json({ error: err.message });
	}
}