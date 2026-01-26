const Agent  = require("../Model/Agent")
const csv = require("csv-parser");
const Task = require("../Model/Task")

const { Readable } = require("stream");

const parseCSV = (buffer) => {
  return new Promise((resolve, reject) => {
    const results = [];

    Readable.from(buffer)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", reject);
  });
};

module.exports.TaskCsvUpload = async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const rows = await parseCSV(req.file.buffer);

      if (!rows.length) {
        return res.status(400).json({ message: "CSV is empty" });
      }

      const requiredFields = ["FirstName", "Phone", "Notes"];
      for (let field of requiredFields) {
        if (!Object.keys(rows[0]).includes(field)) {
          return res.status(400).json({
            message:
              "Invalid CSV format. Required columns: FirstName, Phone, Notes",
          });
        }
      }

    const agents = await Agent.find()

      if (agents.length < 5) {
        return res
          .status(400)
          .json({ message: "At least 5 agents required" });
      }

      const distributed = rows.map((row, index) => ({
        firstName: row.FirstName,
        phone: row.Phone,
        notes: row.Notes,
        agentId: agents[index % agents.length]._id,
      }));

      await Task.insertMany(distributed);

      res.json({ message: "CSV uploaded & distributed successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "CSV processing failed" });
    }
  }

  module.exports.Taskgetdata =async(req,res)=>{
    let Tasks = await Task.find({}).populate("agentId", "name email") 
    .sort({ createdAt: 1 });
   res.json({info:Tasks})
}