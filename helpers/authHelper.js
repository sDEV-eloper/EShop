import bcrypt from 'bcrypt'

export const hashPassword=async(password)=>{
    try{
        const saltRounds=10;
        const hashedPassword=await bcrypt.hash(password, saltRounds)
        return hashedPassword;
    }catch(err){
        console.log(err)
    }
}

//password: This is the plain text password that a user provides during login.
//hashedPassword: This is the hashed password stored in your database for a specific user.
// The bcrypt.compare function returns a promise. It asynchronously compares the password and hashedPassword. If the passwords match, the promise will resolve to true; otherwise, it will resolve to false.
export const comparePassword=async(password, hashedPassword)=>{
  return bcrypt.compare(password, hashedPassword)
}