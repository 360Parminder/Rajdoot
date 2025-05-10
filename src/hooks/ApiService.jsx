import { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/config";
import useApi from "./useApi";

const ApiServiceContext = createContext(null);

export const ApiServiceProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [status, setStatus] = useState(null);
  const {get} =  useApi()

    const fetchPlans = async ()=>{
        const {data} = await get('/plans')
        console.log();
        
    }

    // useEffect(()=>{
    //     fetchPlans()
    // },[])

  return (
    <ApiServiceContext.Provider value={{ loading, error }}>
      {children}
    </ApiServiceContext.Provider>
  );
};

export const useApiService = () => {
  const context = useContext(ApiServiceContext);
  if (!context) {
    throw new Error("useApiService must be used within an ApiServiceProvider");
  }
  return context;
};