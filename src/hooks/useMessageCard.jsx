import { useState } from "react";

const useMessageCard = () => {
    const [message, setMessage] = useState(null);

    const showMessage = (title, message, type = "success") => {
        setMessage({ title, message, type });

        // Auto-hide after 3 seconds
        setTimeout(() => setMessage(null), 5000);
    };

    return { message, showMessage, setMessage };
};

export default useMessageCard;
