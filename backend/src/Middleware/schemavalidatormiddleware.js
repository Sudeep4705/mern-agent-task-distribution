const { ZodError } = require("zod");

const validate = (schema) => async (req, res, next) => {
  try{
    console.log(req.body);
    
    const parseBody = await schema.parseAsync(req.body);
    console.log(parseBody);
    
    req.body = parseBody
    return next();   
  }
catch (err) {
  if (err instanceof ZodError) {
   
    const errorMessage = err.issues[0]?.message || "Invalid data";
    console.log("Validation Error:", errorMessage);

    return res.status(400).json({ message: errorMessage });    
  }
  next(err);
}
};

module.exports = validate;