import { getDBConnection } from './db.sqlite.js';

const DBSqlite = {};

DBSqlite.create = async function (tableName, columnsDefinition) {
    try {
        const conn = await getDBConnection();
        const query = `CREATE TABLE IF NOT EXISTS ${tableName} (${columnsDefinition})`;
        //console.log("query", query);
        await conn.run(query);
        return { success: true };
    } catch (error) {
        console.error(error);
        return { error: `An error occurred while creating the table ${tableName}` };
    }
};

DBSqlite.insert = async function (tableName, data) {
    try {
        const conn = await getDBConnection();       
        const keys = Object.keys(data);        
        const values = Object.values(data)     
        const existingAccount = await conn.get(`SELECT * FROM ${tableName} WHERE ${keys[0]} = ?`, values[0]);        
        if (existingAccount) {
            return { error: `${tableName} already registered` };
        }
        const placeholders = keys.map(() => '?').join(', ');
        const query = `INSERT INTO ${tableName} (${keys.join(', ')}) VALUES (${placeholders})`;
        console.log("query", query, values);
        return await conn.run(query, values);
    } catch (error) {
        console.error(error);
        return { error: 'Error when entering data' };
    }
};

DBSqlite.updateValue = async function (tableName, data) {
    try {
        const conn = await getDBConnection();
        const uuid = data.uuid;
        delete data.uuid;
        const dataKeys = Object.keys(data);
        const dataValues = Object.values(data);
        const placeholders = dataKeys.map(key => `${key} = ?`).join(', ');
        const query = `UPDATE ${tableName} SET ${placeholders} WHERE uuid = ?`;
        console.log("query", query, [...dataValues, uuid]);
        return await conn.run(query, [...dataValues, uuid]);
    } catch (error) {
        console.error(error);
        return { error: 'Error updating data' };
    }
};

DBSqlite.replace = async function (tableName, data) {
    try {
        const conn = await getDBConnection();
        const dataKeys = Object.keys(data);
        const dataValues = Object.values(data);
        const placeholders = dataKeys.map(() => '?').join(', ');
        const query = `REPLACE INTO ${tableName} (${dataKeys.join(', ')}) VALUES (${placeholders})`;
        console.log("query", query, dataValues)
        return await conn.run(query, dataValues);
    } catch (error) {
        console.error(error);
        return { error: 'Error replacing data' };
    }
};

DBSqlite.searchLike = async function (tableName, data) {
    try {
        const conn = await getDBConnection();
        const dataKeys = Object.keys(data);
        const dataValues = Object.values(data)
        const query = `SELECT * FROM ${tableName} WHERE ${dataKeys[0]} LIKE ?`;
        console.log("query", query, [`%${dataValues[0]}%`]);
        return await conn.all(query, [`%${dataValues[0]}%`]);
    } catch (error) {
        console.error(error);
        return { error: 'Error fetching data' };
    }
};

DBSqlite.delete = async function (tableName, data) {
    try {
        const conn = await getDBConnection();
        const dataKeys = Object.keys(data);
        const dataValues = Object.values(data);
        const query = `DELETE FROM ${tableName} WHERE ${dataKeys[0]} = ?`;
        console.log("query", query, [dataValues[0]]);
        return await conn.run(query, [dataValues[0]]);
    } catch (error) {
        console.error(error);
        return { error: 'Error when deleting data' };
    }
};

export default DBSqlite;
