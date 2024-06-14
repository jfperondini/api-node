import ConfigJWT from '../middlewares/configJWT.js'
import { v4 as uuidv4 } from "uuid"
import AccountRepository from '../repository/account.repository.js';
import IdentitieRepository from "../repository/identitie.repository.js";
import UserRepository from '../repository/user.repository.js';
import VerificationRepository from '../repository/verification.respository.js';
import createHashPassword from '../utils/create.hash.password.js';
import bcrypt from "bcrypt";

const AccountService = {};

AccountService.insert = async (accountData) => {
    try {
        const email = { "email": accountData.email };        
        const existingAccount = await AccountRepository.getByType(email);        
        if (existingAccount.length > 0) {
            return { status: 409, data: { message: "Account already registered" } };
        }
        const uuid = uuidv4();
        const account = { "uuid": uuid, "email": accountData.email, "password": accountData.password};       
        const hashedPassword = await createHashPassword(account.password);
        account.password = hashedPassword;        
        const result = await AccountRepository.insert(account);
        const user = { "uuid": uuid, "firstName": accountData.firstName, "lastName": accountData.lastName, "email" : accountData.email};               
        await UserRepository.insert(user);
        if (result) {
            await IdentitieRepository.insert({ uuid: uuid });
            return { status: 201, data: { message: "Account registered successfully" } };
        }
    } catch (error) {
        console.error(error);
        return { status: 500, data: { message: "Error when registering account" } };
    }
};

AccountService.authenticate = async (account) => {
    try {
        const email = { "email": account.email };
        const existingAccount = await AccountRepository.getByType(email);
        if (existingAccount.length === 0) {
            return { status: 401, data: { message: "Invalid credentials unauthorized" } };
        }
        const passwordMatch = await bcrypt.compare(account.password, existingAccount[0].password);
        if (passwordMatch) {
            const token = ConfigJWT.generateToken(existingAccount);
            return { status: 202, data: { ...token } };
        } else {
            return { status: 401, data: { message: "Invalid credentials unauthorized" } };
        }
    } catch (error) {
        console.error(error);
        return { status: 500, data: { message: "Error when logging in" } };
    }
};

AccountService.getByType = async (account) => {
    return await AccountRepository.getByType(account);
};

AccountService.updateValue = async (headers, password) => {
    try {
        const hashedPassword = await createHashPassword(password);
        password = hashedPassword;     
        const uuidValue = headers['uuid'];        
        const data = { uuid: uuidValue, password: password };
        const result = await AccountRepository.updateValue(data);
        if (result) {
            const uuidAccount = { uuid: uuidValue };        
            await IdentitieRepository.updateValue(uuidAccount);        
            return { status: 201, data: { message: "Password updated successfully" } };
        } else {        
            return { status: 404, data: { message: "Account not found" } };
        }
    } catch (error) {       
        console.error(error);
        return { status: 500, data: { message: "Error updating password" } };
    }
};


AccountService.delete = async (uuid) => {
    try {
        const data = { uuid };
        const existingAccount = await AccountRepository.getByType(data);
        if (existingAccount.length < 0) {
            return { status: 404, data: { message: "Account not found" } };
        }
        const result = await AccountRepository.delete(uuid);
        if (result) {
            await IdentitieRepository.delete(uuid);
            await VerificationRepository.delete(uuid);
            await UserRepository.delete(uuid);
            return { status: 204, data: { message: "Account deleted successfully" } };
        }
    } catch (error) {
        console.error(error);
        return { status: 500, data: { message: "Error deleting Account" } };
    }
}

export default AccountService