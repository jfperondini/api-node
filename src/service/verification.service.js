import VerificationRepository from "../repository/verification.respository.js";
import getLocalDateTime from "../utils/date.time.js";

const VerificationService = {};

VerificationService.getByType = async (verificaitonData) => {
    try {
        const code = { "code": verificaitonData.code };
        const verification = await VerificationRepository.getByType(code);
        if (verification.length > 0) {
            const currentDateTime = new Date(getLocalDateTime());
            const verificationDateTime = new Date(verification[0].expiresIn);
            const differenceMilliseconds = currentDateTime - verificationDateTime;
            const differenceSeconds = Math.floor(differenceMilliseconds / 1000);
            if (differenceSeconds < 120) {
                return { status: 200, data: { uuid: verification[0].uuid} };
            } else {
                return { status: 401, data: { message: "Invalid or expired verification code" } };
            }
        } else {
            return { status: 404, data: { message: "Verification code not found" } };
        }
    } catch (error) {
        console.error(error);
        return { status: 500, data: { message: "Error when validating verification code" } };
    }
};

export default VerificationService;
