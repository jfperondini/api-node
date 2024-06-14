import * as yup from 'yup';

const uuid = yup.string()
  .required('Uuid is required')
  .test('Code must be exactly 36 characters', val => val.toString().length === 36);;

const email = yup.string()
  .email('Invalid email format')
  .required('Email is required');

const password = yup.string()
  .required('Password is required');

const firstName = yup.string()
    .required('First name is required')
    .min(4, 'First name must be at least 4 characters')
    .max(30, 'First name must be at most 30 characters');

const lastName = yup.string()
    .required('Last name is required')
    .min(4, 'Last name must be at least 4 characters')
    .max(30, 'Last name must be at most 30 characters');



const byEmailPasswordFirstLastNameSchema = yup.object().shape({
  email: email,
  password: password,
  firstName: firstName,
  lastName: lastName,
});

const byEmailPasswordFirstLastName = async (data) => {
  try {
    await byEmailPasswordFirstLastNameSchema.validate(data);
  } catch (error) {
        return { status: 400, data: { message: error.message } };
  }
};

const byEmailPasswordSchema = yup.object().shape({
  email: email,
  password: password,
  
});

const byEmailPassword = async (data) => {
  try {
    await byEmailPasswordSchema.validate(data);
  } catch (error) {
        return { status: 400, data: { message: error.message } };
  }
};

const byPasswordSchema = yup.object().shape({
  password: password,
});

const byPassword = async (data) => {
  try {
    await byPasswordSchema.validate(data);
  } catch (error) {
        return { status: 400, data: { message: error.message } };
  }
};

const byUuidSchema = yup.object().shape({
  'uuid': uuid,
});

const byUuid = async (data) => {
  try {
    await byUuidSchema.validate(data);
  } catch (error) {
        return { status: 400, data: { message: error.message } };
  }
};


export default { byEmailPasswordFirstLastName,byEmailPassword, byPassword, byUuid };