const Agent = require("../Model/Agent");
const csv = require("csv-parser");
const Task = require("../Model/Task");
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

    // 1. Fetch all available agents
    const agents = await Agent.find();
    if (agents.length === 0) {
      return res.status(400).json({ message: "No agents found in the database" });
    }

    // 2. Map tasks to agents using Round Robin logic
    const distributed = rows.map((row, index) => {
      return {
        firstName: row.FirstName ? row.FirstName.trim() : "N/A",
        phone: row.Phone ? row.Phone.trim() : "N/A",
        notes: row.Notes ? row.Notes.trim() : "",
        // This line splits the tasks across agents evenly
        agentId: agents[index % agents.length]._id,
      };
    });

    // 3. Save all tasks at once
    await Task.insertMany(distributed);

    res.json({ 
      message: `Successfully distributed ${distributed.length} tasks among ${agents.length} agents.` 
    });

  } catch (err) {
    console.error("Upload Error:", err);
    res.status(500).json({ message: "Failed to process and distribute CSV" });
  }
};

module.exports.Taskgetdata = async (req, res) => {
  try {
    let Tasks = await Task.find({})
      .populate("agentId", "name email")
      .sort({ createdAt: 1 });
    
    res.json({ info: Tasks });
  } catch (err) {
    res.status(500).json({ message: "Error fetching task data" });
  }
};