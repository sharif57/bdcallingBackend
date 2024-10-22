import jwt from "jsonwebtoken"
import userServices from "./user.service.js"
const signup = async (req, res, next) => {
    try {
        const result = await userServices.signup(req.body)
        res.status(200).json({
            message: "user created successfull",
            success: true,
            data: result
        })
    } catch (error) {
        next(error)
    }
}
const login = async (req, res, next) => {
    try {
        const result = await userServices.login(req.body)
        const { password, ...others } = result?.data.toObject()
        res.status(200).json({
            message: "user logged in  successfull",
            success: true,
            data: others,
            token: result?.token
        })
    } catch (error) {
        next(error)
    }
}
const getSingleUser = async (req, res, next) => {
    try {
        const result = await userServices.getSingleUser(req.params.id)
        res.status(200).json({
            message: "user retrieved successfull",
            success: true,
            data: result
        })
    } catch (error) {
        next(error)
    }
}
const myProfile = async (req, res, next) => {
    const decode = jwt.verify(req.headers.authorization, "restaurant123")
    console.log(decode)
    try {
        const result = await userServices.myProfile(decode?.email)
        res.status(200).json({
            message: "user retrieved successfull",
            success: true,
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const getAllUsers = async (req, res, next) => {
    try {
        const result = await userServices.getAllUsers();
        res.status(200).json({
            message: "All users retrieved successfully",
            success: true,
            data: result
        });
    } catch (error) {
        next(error);
    }
};


const updateUser = async (req, res, next) => {
    const id = req.params.id
    const data = req.body

    try {
        const result = await userServices.updateUser(id, data)
        res.status(200).json({ message: "user updated ", result })
    } catch (error) {
        console.log(error)
        next(error)

    }
}

const deleteUser = async (req, res, next) => {
    try {
        const deletedUser = await userServices.deleteUser(req.params.id);
        res.status(200).json({
            message: "User deleted successfully",
            success: true
        });
    } catch (error) {
        next(error);
    }
};





const userController = {
    signup,
    getSingleUser,
    login,
    myProfile,
    getAllUsers,
    updateUser,
    deleteUser
}


export default userController