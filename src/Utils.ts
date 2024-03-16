export const AuthService = {
    getToken() {
        return localStorage.getItem('token');
    },

    setToken(token: string) {
        localStorage.setItem('token', token);
    },

    removeToken() {
        localStorage.removeItem('token');
    },

    async isAuthenticated() {
        const response = await requestAPI("/user", "GET", {})
        if (response && response.ok)
            return true;
        return false;
    },
};

// @ts-ignore
export async function requestAPI(url: string, method: string, body: Object): Promise<Response> {
    const address = import.meta.env.VITE_REACT_APP_API + url;
    const token = AuthService.getToken();
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const fetchOptions: RequestInit = {
        method: method,
        headers: headers,
    };

    if (method !== 'GET' && method !== 'HEAD')
        fetchOptions.body = JSON.stringify(body);


    const response = await fetch(address, fetchOptions);
    if (url === '/auth/login' && response.ok) {
        const { access_token } = await response.json();
        AuthService.setToken(access_token);
    }
    return response;
}


export function verifyStrongPassword(password: string): boolean {
    // Check if password has at least 5 characters
    if (password.length < 5) {
        return false;
    }

    // Check if password contains at least one lowercase letter, one uppercase letter, and one number
    let hasLowercase = false;
    let hasUppercase = false;
    let hasNumber = false;

    for (const char of password) {
        if (char >= 'a' && char <= 'z') {
            hasLowercase = true;
        } else if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        } else if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
    }

    return hasLowercase && hasUppercase && hasNumber;
}

export function setFirstLetterUpper(str: string) {
    return str.replace(/\w\S*/g, function(txt: string) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

