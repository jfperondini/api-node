import * as yup from 'yup';

const code = yup.number()
  .integer('Code must be an integer')
  .required('Code is required')
  .test('Code must be exactly 6 characters', val => val.toString().length === 6);



const byCodeSchema = yup.object().shape({
  code: code,
});


const byCode = async (data) => {
  try {
    await byCodeSchema.validate(data);
  } catch (error) {
    return { status: 400, data: { message: error.message } };
  }
};


export default { byCode };