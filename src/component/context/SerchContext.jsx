import {createContext, useState,useContext} from 'react'
import axios from '../../axios';
import requests from '../../request';
 const Context=createContext();
export function SerchContext({children}) {
const [query,setQuery]=useState('');
const [flag,setFalg]=useState(false);
const [result,setResult]=useState('');
const [loading ,setLoading]=useState(true)

 function serch(){
      axios.get(`${requests.search}&query=${query}`).then((res)=>{
       
        setResult(res.data.results);
        setFalg(true)
        setLoading(!loading)
      })
}


  return (
   
<Context.Provider value={{query,setQuery,flag,setFalg,result,setResult,loading,setLoading,serch}}>
{children}
</Context.Provider>

  )
}

export function useSContext(){
 return useContext(Context);
}
