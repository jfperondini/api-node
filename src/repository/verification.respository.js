import DBSqlite from "../db/repository.sqlite.js";

const VerificationRepository = {};

const tableName = 'verification';

VerificationRepository.createTable = async () => {
    const columnsDefinition = 'uuid TEXT(36) PRIMARY KEY, code INTEGER, expiresIn TEXT';
    return await DBSqlite.create(tableName, columnsDefinition);
};

VerificationRepository.replace = async (uuid, verification) => {
    const data = { uuid, ...verification };
    return await DBSqlite.replace(tableName, data);
};

VerificationRepository.getByType = async (code) => {
    return await DBSqlite.searchLike(tableName, code);
};

VerificationRepository.delete = async (data) => {
    return await DBSqlite.delete(tableName, data);
};

export default VerificationRepository;