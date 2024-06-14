import AccountService from "../service/account.service.js";
import accountYup from "../utils/validate.account.js"

const AccountController = {};

AccountController.insert = async (req, res) => {
    const validation = await accountYup.byEmailPasswordFirstLastName(req.body);
    if (validation) {
     return res.status(validation.status).send({ ...validation.data})
    }
    const result = await AccountService.insert(req.body);    
    return res.status(result.status).send({ ...result.data}); 
};

AccountController.authenticate = async (req, res) => {
    const validation = await accountYup.byEmailPassword(req.body);
    if (validation) {
     return res.status(validation.status).send({ ...validation.data })
    }
    const result = await AccountService.authenticate(req.body);
    return res.status(result.status).send({ ...result.data });

};

AccountController.updateValue = async (req, res) => {
    const validation = await accountYup.byPassword(req.body);
    if (validation) {
     return res.status(validation.status).send({ ...validation.data })
    }
    const validationHeaders = await accountYup.byUuid(req.headers);
    if (validationHeaders) {
     return res.status(validation.status).send({ ...validation.data })
    }
    const result = await AccountService.updateValue(req.headers, req.body);
    return res.status(result.status).send({ ...result.data });
}

AccountController.deletar = async (req, res) => {
    const validation = await accountYup.byUuid(req.params);
    if (validation) {
     return res.status(validation.status).send({ ...validation.data })
    }
    const result = await AccountService.delete(req.params);
    return res.status(result.status).send({ ...result.data });
};

export default AccountController;