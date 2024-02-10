import bcrypt from 'bcryptjs';

// @ts-ignore
export async function requestAPI(url: string, method: string, body: Object) {
    try {
        return await fetch(process.env.REACT_APP_AWS_API + url, {
            method: method,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
        });
    } catch (error) {
        ;
    }
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

export function bcryptPassword(password: string): Promise<string> {
    const saltRounds = 5; // The cost factor controls how much time is needed to calculate a single BCrypt hash. Higher is slower and more secure.

    return new Promise((resolve, reject) => {
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if (err) {
                console.error('Error generating salt:', err);
                reject(err); // Reject the promise if there's an error generating the salt
            } else {
                bcrypt.hash(password, salt, function(err, hash) {
                    if (err) {
                        console.error('Error hashing password:', err);
                        reject(err); // Reject the promise if there's an error hashing the password
                    } else {
                        console.log('Hashed password:', hash);
                        resolve(hash); // Resolve the promise with the hashed password
                    }
                });
            }
        });
    });
}
