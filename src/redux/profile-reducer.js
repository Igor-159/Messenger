import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW_POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS  = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
    profilePage:{
         posts:[
                {id: 1, message: "Hi, how are you", likesCount: 12 },
                {id: 2, message: "hhjsadffshju", likesCount: 11},
                {id: 3, message: "gdfxcdfr", likesCount: 11},
                {id: 4, message: "retijerfdjff", likesCount: 11},

        ],
         newPostText: "",
         profile: {},
         status: ''
    }
};


const profileReducer = (state = initialState, action) =>{
    
    switch(action.type)  {
        case ADD_POST:{
        let newPost ={
            id: 7,
            message: action.newPost,
            likesCount: 0
        }
        
        return{
            ...state,
            profilePage: {
                ...state.profilePage,
                newPostText: '',
                posts: [...state.profilePage.posts, newPost]
            }
        }
        
    }
        case UPDATE_NEW_POST_TEXT:{
        return{
            ...state,
            profilePage: {
                ...state.profilePage,
                newPostText: action.newText
            }
        }
        
        }
        case SET_USER_PROFILE:{
            return{
                ...state,
                profilePage: {
                    ...state.profilePage,
                    profile: action.profile 
            }
        }
    }
        case SET_STATUS:{
            return{
                ...state,
                profilePage: {
                    ...state.profilePage,
                    status: action.status
                }
            }
        }
        case DELETE_POST:{
            return{
                ...state,
                profilePage: {
                    ...state.profilePage,
                    posts: state.profilePage.posts.filter(p => p.id !== action.postId)
                }
            }
        }
        case SAVE_PHOTO_SUCCESS:{
            return{
                ...state,
                profilePage: {
                    ...state.profilePage,
                    profile: {...state.profilePage.profile, photos: action.photos}
            }
        }
        }
        default:

             return state;
    }


    

}

export default profileReducer;

export const addPostActionCreator = (newPost) => ({type: ADD_POST, newPost});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
export const updateNewPostTextActionCreator = (text) =>
          ({type: UPDATE_NEW_POST_TEXT, newText: text});


export const getStatus = (id) => async(dispatch) =>{
    let response = await profileAPI.getStatus(id);
    dispatch(setStatus(response.data))
}


export const updateStatus = (status) => async(dispatch) =>{
    let response = await profileAPI.updateStatus(status);
    if(response.data.resultCode === 0)
    dispatch(setStatus(status));
}


export const getUserProfile = (userId) =>async (dispatch) =>{
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const savePhoto = (file) => async(dispatch) =>{
    let response = await profileAPI.savePhoto(file);
    if(response.data.resultCode === 0)
    dispatch(savePhotoSuccess(response.data.data.photos));
}




