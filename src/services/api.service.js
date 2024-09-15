import authService from './auth.service'; // Make sure authService is imported

const apiCall = async (url, options = {}) => {
    const token = authService.getToken();
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(url, {
        ...options,
        headers,
    });

    if (!response.ok) {
        throw new Error('API call failed');
    }

    return response.json();
};

export default apiCall;
