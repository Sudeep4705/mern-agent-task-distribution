const { ZodError } = require("zod");

const validate = (schema) => async (req, res, next) => {
  try{
    console.log(req.body);
    
    const parseBody = await schema.parseAsync(req.body);
    console.log(parseBody);
    
    req.body = parseBody
    return next();   
  }
  catch(err){
      if(err instanceof ZodError){
        const msg =err.issues || [] 
        console.log(msg);

        const errormessages = msg.map((issues)=>{
          return issues.message;
        })
        return res.status(400).json({message:errormessages})    
      }
      next(err);
      
  }
};

module.exports = validate;