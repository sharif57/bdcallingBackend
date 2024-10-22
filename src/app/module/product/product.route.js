import express from "express"


const router = express.Router()
router.post("/users", userController.signup)
router.get("/users", userController.getAllUsers)
router.patch("/users/:id", userController.updateUser)
router.delete("/users/:id", userController.deleteUser)




const userRoutes = router

export default userRoutes