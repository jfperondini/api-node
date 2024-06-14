import VerificationService from "../service/verification.service.js";
import verificationYup from "../utils/validate.verificaiton.js"

const VerificationController = {};

VerificationController.getByType = async (req, res) => {
    const validation = await verificationYup.byCode(req.body);
    if (validation) {
        return res.status(validation.status).send({ ...validation.data });
    }
    const result = await VerificationService.getByType(req.body);
    return res.status(result.status).send({ ...result.data });
};

export default VerificationController;
