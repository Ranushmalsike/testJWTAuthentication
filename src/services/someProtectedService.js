import apiCall from './api.service';

const fetchProtectedData = async () => {
    try {
        const data = await apiCall('/api/protected');
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export { fetchProtectedData };
