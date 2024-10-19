import express from "express"
import userController from "./user.controller.js"
const router = express.Router()
router.get("/users/profile", userController.myProfile)
router.post("/users/login", userController.login)
router.post("/users", userController.signup)
router.get("/users", userController.getAllUsers)
router.patch("/users/:id", userController.updateUser)
router.patch("/users/:id", userController.deleteUser)
router.get("/users/:id", userController.getSingleUser)




// get all user -> find()
// update user  -> findbyandupdate()
// delete user   -> findbyidanddelete()


const userRoutes = router

export default userRoutes