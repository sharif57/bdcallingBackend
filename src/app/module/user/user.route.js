import express from "express"
import userController from "./user.controller.js"
const router = express.Router()
router.get("/users/profile", userController.myProfile)
router.post("/users/login", userController.login)
router.post("/users", userController.signup)
router.get("/users", userController.getAllUsers)
router.patch("/users/:id", userController.updateUser)
router.delete("/users/:id", userController.deleteUser)
router.get("/users/:id", userController.getSingleUser)







const userRoutes = router

export default userRoutes