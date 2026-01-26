  const express = require("express")
  const router = express.Router()
const AgentSchema = require("../Utils/AgentValidator")
const validateSchema =require("../Middleware/schemavalidatormiddleware")
const AgentControllers = require("../Controllers/Agent.controllers")

router.post("/add",validateSchema(AgentSchema),AgentControllers.AgentAdd)










module.exports = router