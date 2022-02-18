import axios from 'axios';

const URL = 'http://localhost:5000';

export const signup = async (userData) => {
    try{
        const awazAii = await axios.post(`${URL}/signUp`, userData);
        return {message: awazAii.data.message}
    }catch (err) {
        console.log(err);;
    }
}

export const signin = async(userData) => {
    try{
        const awazAii = await axios.post(`${URL}/signIn`, userData);
        // console.log(awazAii);
        return {information: awazAii.data};
    }catch(err){
        console.log(err);
    }
}

export const usrByName = async(userData) => {
    try{
        const awazAii = await axios.post(`${URL}/usrbyname`, userData);
        // console.log(awazAii);
        return awazAii.data;
    }catch(err){
        console.log(err);
    }
}

export const resetpassword = async(userData, password) => {
    try{    
        const awazAii = await axios.put(`${URL}/resetpassword`, {userData, password});
        // console.log(awazAii);
        return awazAii.data;
    }catch(err){
        console.log(err);
    }
}

export const verifyOTP = async (otpValue, encryptedOTP) => {
    try{
        const awazAii = await axios.post(`${URL}/verifyotp`, {otpValue, encryptedOTP});
        // console.log(awazAii.data);
        return awazAii.data;
    }catch(err){
        console.log(err);
    }
}

export const getUserDetails = async (userData) => {
    try{
        // console.log(typeof userData)
        const awazAii = await axios.post(`${URL}/userdata`, {userData});
        // console.log(awazAii);
        return awazAii.data;
    }catch(err){
        console.log(err);
    }
}

export const getUserPosts = async(userData) => {
    try{
        // console.log(userData);
        const awazAii = await axios.post(`${URL}/userpost`, {userData});
        // console.log(awazAii);
        return awazAii.data;
    }catch(err){
        console.log(err);
    }
}

export const createNewPost = async(postInformation, postImage) => {
    try{
        // console.log(postInformation);
        // console.log(postImage);
        const awazAii = await axios.post(`${URL}/createpost`, {postInformation, postImage});
        // console.log(awazAii);
        return awazAii.data;
    }catch(err){
        console.log(err);
    }
}

export const getAllPosts = async () => {
    try{
        const awazAii = await axios.get(`${URL}/getallpost`);
        // console.log(awazAii);
        return awazAii.data;
    }catch(err){
        console.log(err);
    }
}