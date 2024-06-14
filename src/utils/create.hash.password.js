import bcrypt from 'bcrypt';

const createHashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password.password, salt); 
  return hashedPassword;
};

export default createHashPassword;
