  const express = require("express")
  const router = express.Router()
const AgentSchema = require("../Utils/AgentValidator")
const validateSchema =require("../Middleware/schemavalidatormiddleware")
const AgentControllers = require("../Controllers/Agent.controllers")
const authenticate =  require("../Middleware/authenticate")

router.post("/add",authenticate,validateSchema(AgentSchema),AgentControllers.AgentAdd)


router.get("/getagent",authenticate,AgentControllers.getagent,)







module.exports = router