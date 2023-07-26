import {
    NotionDatabasePropertyType,
    SelectOption
} from './types';
import axios from 'axios';

class NotionDatabaseConnector {
    databaseId: string;
    key: string;
    response: any;
    isError: boolean = false;
    error: any = null;
    title: string | null = null;
    properties: {[key:string] : NotionDatabasePropertyType} | null = null;

    constructor(databaseId:string, key:string) {
        this.databaseId = databaseId;
        this.key = key;
    }

    getDatabaseInformation() {
        return new Promise((resolve, reject) => {
            const obj = this
            axios.get(
                `https://api.notion.com/v1/databases/${obj.databaseId}`,
                { headers: { 'Authorization': obj.key, 'Notion-Version': '2022-06-28' }}
            ).then(response => {
                const data = response.data;
                obj.response = data;
                obj.properties = data.properties;
                
                resolve({
                    data: obj.response,
                    properties: obj.properties
                });
            })
            .catch(error => {
                const err = error.response.data;
                obj.isError = true;
                obj.error = err;

                reject({
                    error: obj.error
                });
            });
        });
    }

    getDatabaseProperties() {
        const obj = this

        return new Promise((resolve, reject) => {
            if (obj.properties != null) {
                resolve(obj.properties);
            }
            else {
                obj.getDatabaseInformation().then(data => {
                    resolve(obj.properties);
                }).catch(error => {
                    reject(obj.error);
                })
            }
        });
    }

    async getMultiSelectOptions(property: string){
        const obj = this;
        
        if (obj.properties === null) {
            await obj.getDatabaseInformation()
        }

        if (obj.properties !== null) {
            for (const [key, value] of Object.entries(obj.properties)) {
                if (value.type === 'multi_select' && key === property) {
                    return value.multi_select.options;
                }
            }

            throw new Error(`Property '${property}' not found`);
        }
        
        throw new Error(`Database '${obj.databaseId}' not found`);
    }
}

export default NotionDatabaseConnector;