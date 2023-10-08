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
            const token = response.data.token;
            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = 'Token ' + token;
            authentication_status = true; 
        } else {
            console.log("User Login Fail!");
            authentication_status = false;
        }
    } catch (error) {
        //console.error("Request Fail: ", error);
        authentication_status = false;
    }
    return authentication_status;

}

export async function Logout() {
    try {
        // Send a request to the backend to delete the token
        const response = await axios.post('http://127.0.0.1:8000/logout/');

        // If logout was successful on the backend
        if (response.status === 200) {
            console.log("Logout Success!");

            // Remove the token from local storage
            localStorage.removeItem('token');

            // Remove the token from axios headers
            delete axios.defaults.headers.common['Authorization'];

            return true;
        } else {
            console.log("User Logout Fail!");
            return false;
        }
    } catch (error) {
        console.error("Logout Request Failed: ", error);
        return false;
    }
}


export async function Reset_Passowrd(old_password, new_password) {
    let success = false;

    
    try {

        const response2 = await axios.put('http://127.0.0.1:8000/user/resetpassword/', {
            old_password: old_password,
            new_password: new_password
        });

             if (response2.status === 201) {
                 console.log("Reset Password Success!");
                 success = true
             } else {
                 console.log("User reset password Fail!");
             } 
         }
     catch (error) {
        //console.error("Request Fail: ", error);
        
    }
    return success
}

export async function SignUp(firstName, lastName, email, user_password) {
    try {
        // Send a request to the backend
        const response = await axios.post('http://127.0.0.1:8000/user/', {
            first_name: firstName,
            last_name: lastName,
            email: email,
            user_password: user_password
        });
        // If sign up was successful on the backend
        if (response.status === 201) {
            console.log("SignUp Success!");
            return "SUCCESS";
        } 
        // In case server returns any other status code, consider it as a failure.
        console.log("SignUp Fail with status: ", response.status);
    } catch (error) {
        // Log different message based on the status code in error response.
        if (error.response.status === 400){
            return "BAD EMAIL";
        } else if (error.response.status === 500) {
            return "ALREADY EXIEST";
        }
        return false;
    }
}

export async function UpdateUserProfile(profile, newDate) {
    
    try {
        //console.log(profile.firstName);
        // Send a request to the backend
        const response = await axios.put('http://127.0.0.1:8000/user/profile/', {
            first_name: profile.firstName,
            last_name: profile.lastName,
            address : profile.address, 
            city : profile.city, 
            state : profile.state, 
            postcode : profile.postCode,
            phone : profile.phone, 
            dob: newDate
        });
        console.log(response.status);
        // If sign up was successful on the backend
        if (response.status === 201) {
            console.log("SignUp Success!");
            return "SUCCESS";
        } 
        // In case server returns any other status code, consider it as a failure.
        console.log("SignUp Fail with status: ", response.status);
    } catch (error) {
        // Log different message based on the status code in error response.
        if (error.response.status === 400){
            return "BAD EMAIL";
        } else if (error.response.status === 500) {
            return "ALREADY EXIEST";
        }
        return false;
    }
}

export async function GetUserInfor(firstName, lastName, email, user_password) {
    try {
        // Send a request to the backend
        const response = await axios.get('http://127.0.0.1:8000/user/me/');

        // If sign up was successful on the backend
        if (response.status === 200) {
            console.log("Successly get user Infor!");
            return response.data;
        } 
        // In case server returns any other status code, consider it as a failure.
        console.log("GetUserInfor Fail with status: ", response.status);
        return false;
    } catch (error) {
        // Log different message based on the status code in error response.
        if (error.response && error.response.status === 403) {
            console.error("GetUserInfor Forbidden (403): ", error.response.data);
        } else {
            console.error("GetUserInfor Request Failed: ", error);
        }
        return false;
    }
}
