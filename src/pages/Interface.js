import axios from "axios";
import { defaultValue } from './default.js';

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


export async function GetUserInfor() {
    try {
        // Send a request to the backend and get the infor except avatar
        const response = await axios.get('http://127.0.0.1:8000/user/me/');
        //const imageBase64 = await fetchNextChunk();
        //get the base64 string of avatar
        if (response.data["avatar"]) {
            response.data["avatar"] = "data:image/png;base64," + response.data["avatar"];
        } else {
            response.data["avatar"] = "data:image/png;base64," + defaultValue
        }
        //add the avatar into response
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
        if (avatar === "https://github.com/ITProject-Thu-12pm/Assets/blob/main/broken_avatar.png?raw=true") {
            avatar = defaultValue
        }
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
            console.log("Successly add contact Infor!");
            return true;
        } 
        // In case server returns any other status code, consider it as a failure.
        console.log("Add Contact Fail with status: ", response.status);
        return false;
    } catch (error) {
        // Log different message based on the status code in error response.
    
    }
}

export async function addByEmail(email) {
    try {

        // Send a request to the backend
        const response = await axios.post('http://127.0.0.1:8000/contacts/', {
            email : email
        });

        // If sign up was successful on the backend
        if (response.status === 201) {
            console.log("Successly add contact Infor!");
            return response.status;
        } 
        // In case server returns any other status code, consider it as a failure.
        console.log("Add Contact Fail with status: ", response.status);
        return false;
    } catch (error) {
        // Log different message based on the status code in error response.
        if (error.response && error.response.status === 500) {
            console.error("This email has not been registered.");
            return error.response.status
        }
        if (error.response && error.response.status === 400) {
            console.error("Invalid email format.");
            return error.response.status
        }
    }
}



export async function addEvent(eventData) {
    try {
        const response = await axios.post('http://127.0.0.1:8000/event/', eventData);
        
        // Check if the request was successful
        if (response.status === 201) {
            console.log("Successfully added the event!");
            return true;
        } 

        console.log("Failed to add event with status:", response.status);
    } catch (error) {

        if (error.response.status === 400){
            return "Bad Request";
        } else if (error.response.status === 500) {
            return "Internal server wrong";
        }
        return false;
    }
}

export async function getEvent() {
    try {
        // Send a request to the backend
        const response = await axios.get('http://127.0.0.1:8000/event/');

        // If sign up was successful on the backend
        if (response.status === 200) {
            console.log("Successly get event Info!");
            return response.data;
        } 
        // In case server returns any other status code, consider it as a failure.
        console.log("getEvent Fail with status: ", response.status);
        return false;
    } catch (error) {
        // Log different message based on the status code in error response.
        if (error.response && error.response.status === 403) {
            console.error("getEvent Forbidden (403): ", error.response.data);
        } else {
            console.error("getEvent Request Failed: ", error);
        }
        return false;
    }
}

export async function updateEvent(eventData, id) {
    try {
        const response = await axios.put(`http://127.0.0.1:8000/event/${id}/`, eventData);
        
        if (response.status === 200) {
            console.log("Successfully updated the event!");
            return true;
        } 

        console.log("Failed to update event with status:", response.status);
        return false;
    } catch (error) {
        console.error("Error updating event:", error);
        return false;
    }
}

export async function deleteEvent(id) {
    try {
        const response = await axios.delete(`http://127.0.0.1:8000/event/${id}/`);

        if (response.status === 204) { // 204 No Content is the typical response for a successful DELETE request
            console.log("Successfully deleted the event!");
            return true;
        } 

        console.log("Failed to delete event with status:", response.status);
        return false;
    } catch (error) {
        console.error("Error deleting event:", error);
        return false;
    }
}

