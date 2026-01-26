const express = require("express")
const router = express.Router()
const validateSchema = require("../Middleware/schemavalidatormiddleware")
const signupSchemaValidator = require("../Utils/SchemaValidatore")
const AdminController = require("../Controllers/Admin.controllers")

router.post("/signup",validateSchema(signupSchemaValidator),AdminController.AdminSignup)


router.post("/login",AdminController.AdminLogin)

// verify
router.post("/verify",AdminController.AdminVerify)

// logout
router.get("/logout",AdminController.AdminLogout)


module.exports = router