import generateCode from "../utils/generate.code.js";
import VerificationRepository from "../repository/verification.respository.js";
import AccountRepository from "../repository/account.repository.js";

const ValidationService = {};

ValidationService.getByType = async (accountData) => {
    try {
        const verification = generateCode();       
        const account = { "email": accountData.email };
        const existingAccount = await AccountRepository.getByType(account);
        if (existingAccount) {
            await VerificationRepository.replace(existingAccount[0].uuid, verification);
            return { status: 201, data: { code: verification.code, expiresIn: verification.expiresIn } };
        } else {
            return { status: 404, data: { message: "Usuário not found" } };
        }
    } catch (error) {
        console.error(error);
        return { status: 500, data: { message: "Error when validating email" } };
    }
};

export default ValidationService;