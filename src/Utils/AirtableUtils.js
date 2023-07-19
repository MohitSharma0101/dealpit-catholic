import Airtable from "airtable";
import { useEffect, useState } from "react";

const airtableApiKey = process.env.REACT_APP_AIRTABLE_API_KEY;
const baseId = process.env.REACT_APP_AIRTABLE_BASE_ID;
const airtableBase = new Airtable({ apiKey: airtableApiKey }).base(baseId);
const customerTableId = process.env.REACT_APP_AIRTABLE_CUSTOMER_TABLE_ID;
const productsTableId = process.env.REACT_APP_AIRTABLE_PRODUCTS_TABLE_ID;
const productsCategpryTableId = process.env.REACT_APP_AIRTABLE_PRODUCTS_CATEGORY_TABLE_ID;

export const getAirtableBase = () => {
    return airtableBase;
}

export const getCustomerTable = () => {
    return airtableBase(customerTableId);
}

export const getProductsTable = () => {
    return airtableBase(productsTableId);
}

export const getProductsCategoryTable = () => {
    return airtableBase(productsCategpryTableId);
}

export const useProductsCategory = () => {
    const [category, setCategory] = useState([]);
    useEffect(()=>{
        getProductsCategoryTable().select({
            
            maxRecords: 100,
            view: "Grid view"
        }).eachPage(function page(records, fetchNextPage) {
            setCategory(records.map((record) => ({
                name: record.get("Name"),
                category: "c",
                image: record.get("Image"),
            })));
        }, function done(err) {
            if (err) { console.error(err); return; }
        })
    },[]);
    return category;
};