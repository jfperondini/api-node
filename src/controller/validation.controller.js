import ValidationService from "../service/validation.service.js";
import validationYup from "../utils/validate.validation.js";

const ValidationController = {};

ValidationController.getByType = async (req, res) => {
    const validation = await validationYup.byEmail(req.body);
    if (validation) {
        return res.status(validation.status).send({ ...validation.data })
    }
    const result = await ValidationService.getByType(req.body);
    return res.status(result.status).send({ ...result.data });
};


export default ValidationController;
