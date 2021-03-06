import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
    "API-KEY": "98df3715-f2f7-4d7d-93ca-b5faa140aedb" 
    }
});



export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response=> response.data);
                    
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
        .then(response=> response.data);
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
        .then(response=> response.data)                                       
    },
    getProfile(id){
        console.warm('Obsolete method. Please profileAPI object');
        return profileAPI.getProfile(id)
        
    },
}


export const profileAPI = {
    
    getProfile(id){
        return instance.get(`profile/${id}`)
    },
    getStatus(id){
        
        return instance.get(`profile/status/${id}`)  
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status});
    },
    savePhoto(photoFile){
        let formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile){
        return instance.put(`profile`, profile);
    }
}


export const authAPI = {
    getMe(){
        return instance.get('auth/me');
        
    },
    login(email, password, rememberMe = false, captcha = null){
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout(){
        return instance.delete(`auth/login`);
    }

}

export const securityAPI={
    getCaptchaUrl(){
        return instance.post('security/get-captcha-url');
    }
}