import {allCountryList as country} from "./countries.js";

country.map((item,i)=>{
    let Details=`My country name is ${item.name}`
    console.log(Details)
})