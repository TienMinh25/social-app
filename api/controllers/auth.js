import { db } from "../connect";

export const register = (req, res) => {
    // CHECK USER IF EXISTS
    const q = "SELECT FROM users WHERE username = ?"
    db.query(q, [req.body.username], )
    // CREATE A NEW USER
    //Hash the password
};
export const login = (req, res) => {};
export const logout = (req, res) => {};
