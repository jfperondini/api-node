import { existsSync, unlinkSync } from 'fs';

const db = "./db/database.db";

if (existsSync(db)) {
    unlinkSync(db);
    console.log('Database deleted successfully.');
} else {
    console.log('Banco de dados não encontrado.');
}
