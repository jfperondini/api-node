import * as yup from 'yup';

const uuid = yup.string()
    .required('Uuid is required')
    .test('Code must be exactly 36 characters', val => val.toString().length === 36);;

const byUuidSchema = yup.object().shape({
    uuid: uuid,
});


const byUuid = async (data) => {
    try {
        await byUuidSchema.validate(data);
    } catch (error) {
        return { status: 400, data: { message: error.message } };
    }
};

export default {byUuid };
