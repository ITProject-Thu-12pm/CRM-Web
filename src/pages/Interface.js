import axios from "axios";

export async function Login(user_email, user_password) {
    let authentication_status = false;
    
    try {
        // connect to the backend and post the
        const response = await axios.post('http://127.0.0.1:8000/login/', {
            email: user_email,
            password: user_password
        });

        if (response.status === 201) {
            console.log("Login Success!");
            authentication_status = true; 
        } else {
            console.log("User Login Fail!");
            authentication_status = false;
        }
    } catch (error) {
        console.error("Request Fail: ", error);
        authentication_status = false;
    }
    return authentication_status;

}


