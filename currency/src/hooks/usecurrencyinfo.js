import {useEffect,useState} from "react"

function Usecurrencyinfo(currency){
    consy [data,setdata]=useState()
    useEffect=(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/
            currency-api@1/latest/currencies/${currency}.json`)
            .then((res)=>res.json())//convert response to json
            .then((res)=>setData(res[currency]))//store res
            console.log(data);
    },[currency])//currency main change hoga to yeh dependcy hai reload ho 
    console.log(data);
    return  
}

export default Usecurrencyinfo;