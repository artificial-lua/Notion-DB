enum optionColors {
    blue = 'blue',
    brown = 'brown',
    default = 'default',
    gray = 'gray',
    green = 'green',
    orange = 'orange',
    pink = 'pink',
    purple = 'purple',
    red = 'red',
    yellow = 'yellow'
}

enum numberFormat {
    argentine_peso = 'argentine_peso',
    baht = 'baht',
    canadian_dollar = 'canadian_dollar',
    chilean_peso = 'chilean_peso',
    colombian_peso = 'colombian_peso',
    danish_krone = 'danish_krone',
    dirham = 'dirham',
    dollar = 'dollar',
    euro = 'euro',
    forint = 'forint',
    franc = 'franc',
    hong_kong_dollar = 'hong_kong_dollar',
    koruna = 'koruna',
    krona = 'krona',
    leu = 'leu',
    lira = 'lira',
    mexican_peso = 'mexican_peso',
    new_taiwan_dollar = 'new_taiwan_dollar',
    new_zealand_dollar = 'new_zealand_dollar',
    norwegian_krone = 'norwegian_krone',
    number = 'number',
    number_with_commas = 'number_with_commas',
    percent = 'percent',
    philippine_peso = 'philippine_peso',
    pound = 'pound',
    peruvian_sol = 'peruvian_sol',
    rand = 'rand',
    real = 'real',
    ringgit = 'ringgit',
    riyal = 'riyal',
    ruble = 'ruble',
    rupee = 'rupee',
    rupiah = 'rupiah',
    shekel = 'shekel',
    singapore_dollar = 'singapore_dollar',
    uruguayan_peso = 'uruguayan_peso',
    yen = 'yen',
    yuan = 'yuan',
    won = 'won',
    zloty = 'zloty'
}

export interface NotionDatabasePropertyType {
    id: string;
    name: string;
    type: string;
}

interface SelectOption extends NotionDatabasePropertyType {
    color: optionColors;
}

interface SelectOptionGroup extends SelectOption {
    option_ids: string[];
}

//

export interface Checkbox extends NotionDatabasePropertyType {
    type: 'checkbox';
    checkbox: {};
}

export interface CreatedBy extends NotionDatabasePropertyType {
    type: 'created_by';
    created_by: {};
}

export interface CreatedTime extends NotionDatabasePropertyType {
    type: 'created_time';
    created_time: {};
}

export interface Date extends NotionDatabasePropertyType {
    type: 'date';
    date: {};
}

export interface Email extends NotionDatabasePropertyType {
    type: 'email';
    email: {};

}

/** 📘 The Notion API does not yet support uploading files to Notion. */
export interface Files extends NotionDatabasePropertyType {
    type: 'files';
    files: {};
}

export interface Formula extends NotionDatabasePropertyType {
    type: 'formula';
    formula: {
        expression: string;
    };
}

export interface LastEditedBy extends NotionDatabasePropertyType {
    type: 'last_edited_by';
    last_edited_by: {};
}

export interface LastEditedTime extends NotionDatabasePropertyType {
    type: 'last_edited_time';
    last_edited_time: {};
}

export interface MultiSelect extends NotionDatabasePropertyType {
    type: 'multi_select';
    multi_select: {
        options: SelectOption[];
    };
}

export interface Number extends NotionDatabasePropertyType {
    type: 'number';
    number: {
        format: numberFormat;
    };
}

export interface People extends NotionDatabasePropertyType {
    type: 'people';
    people: {};
}

export interface PhoneNumber extends NotionDatabasePropertyType {
    type: 'phone_number';
    phone_number: {};
}

export interface Relation extends NotionDatabasePropertyType {
    type: 'relation';
    relation: {
        database_id: string;
        synced_property_name: string;
        synced_property_id: string;
    };
}

export interface RichText extends NotionDatabasePropertyType {
    type: 'rich_text';
    rich_text: {};
}

export interface Rollup extends NotionDatabasePropertyType {
    type: 'rollup';
    rollup: {
        relation_property_name: string;
        relation_property_id: string;
        rollup_property_name: string;
        rollup_property_id: string;
        function: string;
    };
}

export interface Select extends NotionDatabasePropertyType {
    type: 'select';
    select: {
        options: SelectOption[];
    };
}


/**
🚧 It is not possible to update a status database property's name or options values via the API.
Update these values from the Notion UI, instead.
*/
export interface Status extends NotionDatabasePropertyType {
    type: 'status';
    status: {
        options: SelectOption[];
        groups: SelectOptionGroup[];
    };
}

/**
🚧 All databases require one, and only one, title property.

The API throws errors if you send a request to Create a database without a title property, or if you attempt to Update a database to add or remove a title property.


📘Title database property vs. database title

A title database property is a type of column in a database.

A database title defines the title of the database and is found on the database object.

Every database requires both a database title and a title database property.
*/
export interface Title extends NotionDatabasePropertyType {
    type: 'title';
    title: {};
}

export interface Url extends NotionDatabasePropertyType {
    type: 'url';
    url: {};
}

export default NotionDatabasePropertyType;