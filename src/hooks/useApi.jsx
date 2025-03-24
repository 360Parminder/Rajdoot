import { useState, useCallback } from 'react';
import api from '../api/config'; // Import the pre-configured api instance

const useApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (endpoint, options = {}) => {
        setLoading(true);
        setError(null);

        try {
            const config = {
                url: endpoint,
                method: options.method || 'GET',
                ...options,
            };

            // Handle data based on content type
            if (options.data) {
                if (options.isFormData) {
                    config.data = options.data;
                    // Let axios set the proper content type for FormData
                    delete config.headers?.['Content-Type'];
                } else {
                    config.data = options.data;
                }
            }

            // For blob responses (downloads)
            if (options.responseType === 'blob') {
                config.responseType = 'blob';
            }
            
            const response = await api(config);
            
            setLoading(false);
            return { 
                data: response.data, 
                headers: response.headers, 
                status: response.status 
            };
        } catch (err) {
            const errorMessage = err.response?.data?.message || err.message || 'An error occurred';
            setError(errorMessage);
            setLoading(false);
            throw err;
        }
    }, []);

    // GET request
    const get = useCallback((endpoint, options = {}) => {
        return request(endpoint, { method: 'GET', ...options });
    }, [request]);

    // POST request (Create)
    const post = useCallback((endpoint, data, options = {}) => {
        return request(endpoint, {
            method: 'POST',
            data,
            ...options,
        });
    }, [request]);

    // PUT request (Update)
    const put = useCallback((endpoint, data, options = {}) => {
        return request(endpoint, {
            method: 'PUT',
            data,
            ...options,
        });
    }, [request]);

    // PATCH request (Partial Update)
    const patch = useCallback((endpoint, data, options = {}) => {
        return request(endpoint, {
            method: 'PATCH',
            data,
            ...options,
        });
    }, [request]);

    // DELETE request
    const remove = useCallback((endpoint, options = {}) => {
        return request(endpoint, { method: 'DELETE', ...options });
    }, [request]);

    // Upload files
    const upload = useCallback((endpoint, formData, options = {}) => {
        return request(endpoint, {
            method: 'POST',
            data: formData,
            isFormData: true,
            ...options,
        });
    }, [request]);

    // Download files
    const download = useCallback((endpoint, options = {}) => {
        return request(endpoint, {
            method: 'GET',
            responseType: 'blob',
            ...options,
        });
    }, [request]);

    return {
        get,
        post,
        put,
        patch,
        remove,
        upload,
        download,
        request,
        loading,
        error
    };
};

export default useApi;
