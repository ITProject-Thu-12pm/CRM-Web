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
                 success = false
             } 
         }
     catch (error) {
        success = false;
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
        console.log(profile.tempAvatar);
        // Send a request to the backend
        const response = await axios.put('http://127.0.0.1:8000/user/profile/', {
            first_name: profile.firstName,
            last_name: profile.lastName,
            address : profile.address, 
            city : profile.city, 
            state : profile.state, 
            postcode : profile.postCode,
            phone : profile.phone, 
            dob: newDate,
            avatar: profile.tempAvatar
        });
        console.log(response.status);
        // If sign up was successful on the backend
        if (response.status === 201) {
            console.log("Update profile success!");
            return "SUCCESS";
        } 
        // In case server returns any other status code, consider it as a failure.
        console.log("Update profile Fail with status: ", response.status);
    } catch (error) {
        // Log different message based on the status code in error response.
        if (error.response.status === 400){
            return "Bad Request";
        } else if (error.response.status === 500) {
            return "Internal server wrong";
        }
        return false;
    }
}

async function fetchNextChunk(chunkNumber = 0, fullImage = "") {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/user/me/`, {
            params: { chunk: chunkNumber }
        });
        
        fullImage += response.data.chunk;
        
        if (response.data.hasMore) {
            return await fetchNextChunk(chunkNumber + 1, fullImage);
        } else {
            return fullImage;
        }
    } catch (error) {
        console.error("Error fetching data chunk:", error);
        throw error; // Propagate error upwards to allow caller functions to handle it
    }
}

export async function GetUserInfor() {
    try {
        // Send a request to the backend and get the infor except avatar
        const response = await axios.get('http://127.0.0.1:8000/user/me/');

        //get the base64 string of avatar
        const imageBase64 = await fetchNextChunk();

        //add the avatar into response
        response.data["avatar"] = "data:image/png;base64," + imageBase64;
        //console.log(response.data.avatar);
        // If get user was successful on the backend
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


export async function GetUserContact(firstName, lastName, email, user_password) {
    try {
        // Send a request to the backend
        const response = await axios.get('http://127.0.0.1:8000/contacts/');
        for (let eachContact in response.data) {
            if (response.data[eachContact]["avatar"]) {
                response.data[eachContact]["avatar"] = "data:image/png;base64," + response.data[eachContact]["avatar"];
            }
             
        }
        // If sign up was successful on the backend
        if (response.status === 201) {
            console.log("Successly get user Infor!");
            return response.data;
        } 
        // In case server returns any other status code, consider it as a failure.
        console.log("Get Contact Fail with status: ", response.status);
        return null;
    } catch (error) {
        // Log different message based on the status code in error response.
    
    }
}

export async function addUserContact(firstName, lastName, tags, phone, email, streetAddress, city, state, postcode, dob, gender, avatar) {
    try {
        console.log(avatar);
        // Send a request to the backend
        const response = await axios.post('http://127.0.0.1:8000/contacts/', {
            first_name : firstName,
            last_name : lastName,
            tags : tags,
            phone: phone,
            email : email,
            address : streetAddress,
            city : city,
            state : state,
            postcode : postcode,
            gender : gender,
            dob : dob,
            avatar : avatar
        });

        // If sign up was successful on the backend
        if (response.status === 201) {
            console.log("Successly get user Infor!");
            return true;
        } 
        // In case server returns any other status code, consider it as a failure.
        console.log("Get Contact Fail with status: ", response.status);
        return false;
    } catch (error) {
        // Log different message based on the status code in error response.
    
    }
}

