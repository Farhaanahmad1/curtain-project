import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "admin"; // Change this securely in production
const SECRET_KEY = "farhan"; // Use env variable in production

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Validate credentials
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Generate JWT token
      const token = jwt.sign({ email, role: "admin" }, SECRET_KEY, { expiresIn: "1h" });

      return NextResponse.json({ token }, { status: 200 });
    }

    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}