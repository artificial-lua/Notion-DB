import { NotionDatabasePropertyType } from './types';
import axios from 'axios';

class NotionDatabaseConnector {
    databaseId: string;
    key: string;
    response: any;
    isError: boolean = false;
    error: any = null;
    title: string = '';
    properties: {[key:string] : NotionDatabasePropertyType} = {};

    constructor(databaseId:string, key:string) {
        this.databaseId = databaseId;
        this.key = key;
    }

    async getDatabaseInformation() {
        

        await axios.get(
            `https://api.notion.com/v1/databases/${this.databaseId}`,
            { headers: { 'Authorization': this.key, 'Notion-Version': '2022-06-28' }}
        ).then(response => {
            const data = response.data;
            this.response = data;
            this.properties = data.properties;
            
            console.log(response.data.properties.Tags.multi_select.options)
        })
        .catch(error => {
            const err = error.response.data;
            this.isError = true;
            this.error = err;

            throw new Error(err.message);
        });

        return this.response;
    }
}

export default NotionDatabaseConnector;