// src/services/auth.service.js

// This is a mock API call. In a real app, this would be an actual API endpoint.
const mockLogin = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'user@example.com' && password === 'password') {
                resolve({
                    token: 'mock-jwt-token',
                    user: { id: 1, name: 'Test User', email: 'user@example.com' }
                });
            } else {
                reject(new Error('Invalid credentials'));
            }
        }, 1000); // Simulate network delay
    });
};

const authService = {
    login: async (email, password) => {
        try {
            const response = await mockLogin(email, password);
            localStorage.setItem('user-token', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
            return response.user;
        } catch (error) {
            throw new Error('Login failed');
        }
    },

    logout: () => {
        localStorage.removeItem('user-token');
        localStorage.removeItem('user');
    },

    getToken: () => {
        return localStorage.getItem('user-token');
    },

    getUser: () => {
        const userStr = localStorage.getItem('user');
        return userStr ? JSON.parse(userStr) : null;
    },

    isAuthenticated: () => {
        return !!authService.getToken();
    }
};

export default authService;
