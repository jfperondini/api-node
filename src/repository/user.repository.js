import DBSqlite from "../db/repository.sqlite.js";

const UserRepository = {}

const tableName = 'user';

UserRepository.createTable = async () => {
    const columnsDefinition = 'uuid TEXT(36) PRIMARY KEY, firstName TEXT, lastName TEXT, email TEXT UNIQUE';
    return await DBSqlite.create(tableName, columnsDefinition);
};

UserRepository.insert = async (data) => {
    return await DBSqlite.insert(tableName, data)
};

UserRepository.getByType = async (uuid) => {
    const data = { ...uuid };
    return await DBSqlite.searchLike(tableName, data);
}

UserRepository.updateValue = async (uuid, updates) => {
    const data = { ...uuid, ...updates };
    return await DBSqlite.updateValue(tableName, data);
};

UserRepository.delete = async (data) => {
    return await DBSqlite.delete(tableName, data);
};


export default UserRepository