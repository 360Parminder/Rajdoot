import React, { createContext, useContext, useState, useCallback, use, useEffect } from 'react';
import axios from '../api/config';
import { useAuth } from '../hooks/useAuth';
// Create the API context
const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const { user,logedIn } = useAuth();
    const [apis, setApis] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    // Fetch all APIs
    const fetchApis = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get("/api-keys/view-api-keys");
            setApis(response.data.data);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch APIs');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Create a new API
    const createApi = async (apiData) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(`/api-keys/create-api-key`, apiData);
            setApis(prevApis => [...prevApis, response.data]);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create API');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Delete an API
    const deleteApi = async (apiId) => {
        setLoading(true);
        setError(null);
        try {
           const {data}= await axios.delete(`/api-keys/api-keys/:key?keyId=${apiId}`);
            console.log(data);
            
            setApis(data.newApis);
            return true;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to delete API');
            throw err;
        } finally {
            setLoading(false);
        }
    }
    
    useEffect(() => {
        if (logedIn) {
            fetchApis();
        }
    }, [logedIn]);


    const value = {
        apis,
        loading,
        error,
        fetchApis,
        createApi,
        deleteApi,
    };

    return <ApiContext.Provider value={{value}}>{children}</ApiContext.Provider>;
};

export const useApi = () => {
    const context = useContext(ApiContext);
    if (context === undefined) {
        throw new Error('useApi must be used within an ApiProvider');
    }
    return context;
};

export default ApiContext;