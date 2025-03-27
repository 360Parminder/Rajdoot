import axios from "./config";



export const joinWaitlist = async (email) => {
    try {
        const {data} = await axios.post(`/api/v1/waitlist/join`,{
            email
        });
        return{data};
        
    } catch (error) {
        return{ data:error.response.data}
    }
};

export const checkWaitlistPosition = async (email) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/waitlist/position`, {
            params: { email }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateWaitlistInfo = async (email, updatedData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/waitlist/update`, {
            email,
            ...updatedData
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
