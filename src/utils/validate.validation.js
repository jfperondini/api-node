import * as yup from 'yup';

const email = yup.string()
  .email('Invalid email format')
  .required('Email is required');

const byEmailSchema = yup.object().shape({
  email: email,
});


const byEmail = async (data) => {
  try {
    await byEmailSchema.validate(data);
  } catch (error) {
    return { status: 400, data: { message: error.message } };
  }
};


export default { byEmail };