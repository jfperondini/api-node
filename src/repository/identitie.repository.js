import DBSqlite from "../db/repository.sqlite.js";
import getLocalDateTime from "../utils/date.time.js";

const IdentitieRepository = {}

const tableName = 'identitie';

IdentitieRepository.createIdentitieTable = async () => {
    const columnsDefinition = 'uuid TEXT(36) PRIMARY KEY, createdAt TEXT, updatedAt TEXT';
    return await DBSqlite.create(tableName, columnsDefinition);
}

const currentDateTime = getLocalDateTime();

IdentitieRepository.insert = async (data) => {
    const value = { ...data, "createdAt": currentDateTime, };
    return await DBSqlite.insert(tableName, value)
}

IdentitieRepository.updateValue = async (data) => {
    const value = { ...data, "updatedAt": currentDateTime };
    return await DBSqlite.updateValue(tableName, value)
};

IdentitieRepository.delete = async (data) => {
    return await DBSqlite.delete(tableName, data);
};


export default IdentitieRepository
