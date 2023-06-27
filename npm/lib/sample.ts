import NotionDatabaseConnector from './index';

const key = '';
const databaseId = '';
const db = new NotionDatabaseConnector(databaseId, `${key}`);
console.log(db.getDatabaseInformation());