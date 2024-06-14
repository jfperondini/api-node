import DBSqlite from "../db/repository.sqlite.js";

const AccountRepository = {};

const tableName = 'account';

AccountRepository.createTable = async () => {
    const columnsDefinition = 'uuid TEXT(36) PRIMARY KEY, email TEXT UNIQUE, password TEXT';
    return await DBSqlite.create(tableName, columnsDefinition);
};

AccountRepository.insert = async (account) => {
    return await DBSqlite.insert(tableName, account);
}

AccountRepository.updateValue = async (account) => {
    return await DBSqlite.updateValue(tableName, account);
};

AccountRepository.getByType = async (account) => {
    return await DBSqlite.searchLike(tableName, account);
};

AccountRepository.delete = async (account) => {
    return await DBSqlite.delete(tableName, account);
};

export default AccountRepository;