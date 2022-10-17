import React from "react";
import axios from 'axios'

export const fetchdata = async ()=>{
    try{
        const response = await axios.get('https://dummyjson.com/products')
        return response.data.products
     }
     catch (error) {
        console.log(error);
    }
}