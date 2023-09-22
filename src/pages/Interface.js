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
        //console.error("Request Fail: ", error);
        authentication_status = false;
    }
    return authentication_status;

}

export async function Reset_Passowrd(old_password, new_password) {
    let success = false;
    
    try {
        // connect to the backend and post the
        const response1 = await axios.post('http://127.0.0.1:8000/user/1@gmail.com/', {
            old_password: old_password
            
        });
        if (response1.status === 201) {
             const response2 = await axios.put('http://127.0.0.1:8000/user/1@gmail.com/', {
             new_password: new_password
         });
             if (response2.status === 201) {
                 console.log("Reset Password Success!");
                 success = true
             } else {
                 console.log("User reset password Fail!");
             } 
         }
    } catch (error) {
        //console.error("Request Fail: ", error);
        
    }
    return success

}
