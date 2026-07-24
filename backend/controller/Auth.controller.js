import User from "../model/Auth.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendOTP from "../utils/sendEmail.js";

// ========================= SIGNUP =========================
const signup = async (req, res) => {
    try {
        const { fullname, email, mobile, password } = req.body;

        // Generate OTP
        const otp = Math.floor(1000 + Math.random() * 9000);
        const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

        // Check if email already exists
        const emailExist = await User.findOne({ email });

        if (emailExist) {

            // If user is already verified
            if (emailExist.isVerified) {
                return res.status(400).json({
                    success: false,
                    message: "Email already registered"
                });
            }

            // Update OTP for unverified user
            emailExist.otp = otp;
            emailExist.otpExpiry = otpExpiry;

            await emailExist.save();

            await sendOTP(email, otp);

            return res.status(200).json({
                success: true,
                message: "OTP resent successfully."
            });
        }

        // Check mobile
        const mobileExist = await User.findOne({ mobile });

        if (mobileExist) {
            return res.status(400).json({
                success: false,
                message: "Mobile number already in use"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Send OTP first
        await sendOTP(email, otp);

        // Save user
        await User.create({
            fullname,
            email,
            mobile,
            password: hashedPassword,
            otp,
            otpExpiry,
            isVerified: false
        });

        res.status(201).json({
            success: true,
            message: "OTP sent to your email."
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// ========================= VERIFY OTP =========================
const verifyOTP = async (req, res) => {
    try {

        const { email, otp } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        if (user.otp !== Number(otp)) {
            return res.status(400).json({
                message: "Invalid OTP"
            });
        }

        if (user.otpExpiry < new Date()) {
            return res.status(400).json({
                message: "OTP expired"
            });
        }

        user.isVerified = true;
        user.otp = null;
        user.otpExpiry = null;

        await user.save();

        res.status(200).json({
            success: true,
            message: "Email verified successfully"
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// ========================= LOGIN =========================
const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Email not registered"
            });
        }

        // Check email verification
        if (!user.isVerified) {
            return res.status(400).json({
                message: "Please verify your email first."
            });
        }

        // Check password
        const isLogin = await bcrypt.compare(password, user.password);

        if (!isLogin) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        // JWT Payload
        const payload = {
            id: user._id,
            fullname: user.fullname,
            email: user.email,
            mobile: user.mobile
        };

        // Generate Token
        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        );

        res.status(200).json({
            success: true,
            message: "Login successful",
            token
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

export { signup, verifyOTP, login };