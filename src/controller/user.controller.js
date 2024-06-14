import UserService from "../service/user.service.js";
import userYup from "../utils/validate.user.js"

const UserController = {};

UserController.getByType = async (req, res) => {
  const validation = await userYup.byUuid(req.body);
  if (validation) {
     return res.status(validation.status).send({ ...validation.data })
  }
  const result = await UserService.getByType(req.body);
  return res.status(result.status).send({ ...result.data })

};

UserController.updateValue = async (req, res) => {
  const validation = await userYup.byUuid(req.params);
  if (validation) {
     return res.status(validation.status).send({ ...validation.data })
  }
  const result = await UserService.updateValue(req.params, req.body);
  return res.status(result.status).send({ ...result.data })
};


export default UserController;