import react, { useEffect, useState } from "react";
import API_KEY from "./Keys";

const CONTEXT_KEY="f7d84d5941d174118";

const useGoogleSearch=(term)=>{
    const [data,setData]=useState(null);
    

    useEffect(()=>{
        const fetchData=async()=>{
            const data=await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            const result=await data.json();
            setData(result)
        }
        fetchData();
    },[term])

    return {data}
}

export default useGoogleSearch