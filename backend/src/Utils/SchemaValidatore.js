const {z} = require('zod')
// creating schema validation using zod
const signupschema = z.object({
    fullname:z.string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name is at least of 3 char"})
    .max(255,{message:"Name must  not be more than 255 characaters"}),
    email:z.string({required_error:"Email is required"})
    .trim()
    .email({message:"invalid email address"})
    .max(255,{message:"Email must  not be more than 255 characaters"}),
    password:z.string({required_error:"password is required"})
    .trim()
    .min(8,{message:"invalid password"})
    .max(20,{message:"password must  not be more than 20 characaters"}),
})
module.exports = signupschema



