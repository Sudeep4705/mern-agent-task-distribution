const express = require("express")
const router = express.Router()
const multer  = require('multer')
const upload = multer({ storage: multer.memoryStorage() })
const Taskcontroller = require("../Controllers/Task.controllers")






router.post(
  "/upload-csv",
  upload.single("file"),Taskcontroller.TaskCsvUpload
  
);

router.get("/getdata",Taskcontroller.Taskgetdata)


module.exports = router