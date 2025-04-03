import { useState, useEffect } from 'react';
import axios from '../api/config';

export const useFetchPlans = () => {
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

    return { plans, loading, error };
};
