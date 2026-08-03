import { useState, useEffect, createContext, useContext } from 'react';
import axios from '../api/config';

const PlansContext = createContext(null);
export const PlansProvider = ({ children }) => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const { data } = await axios.get('/plans');
                setPlans(data);
                setLoading(false);
            } catch (err) {
                setError(err.response?.data?.message || 'Failed to fetch plans');
                setLoading(false);
            }
        };

        fetchPlans();
    }, []);

    return (
        <PlansContext.Provider value={{ plans, loading, error }}>
            {children}
        </PlansContext.Provider>
    );
};

export const usePlans = () => {
    return useContext(PlansContext);
}