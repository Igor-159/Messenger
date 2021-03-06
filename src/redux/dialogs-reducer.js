
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsPage:{
        dialogs:[
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrew"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Viktor"},
            {id: 6, name: "Valera"}
        ],
        messages:[
            {id:1, message:'Hi'},
            {id:2, message: 'How is your it-kamasutra?'},
            {id:3, message: 'You'},
            {id:4, message: 'You'},
            {id:5, message: 'You'}
        ],
    
}
};


const dialogsReducer = (state = initialState, action) =>{
 switch(action.type){
    
    
    case SEND_MESSAGE:{
    let body = action.newMessageBody;
    let stateCopy = {
        ...state,
        dialogsPage: {
            ...state.dialogsPage, 
            messages: [...state.dialogsPage.messages,{id: 6, message: body}]}
    }
    
    
    return stateCopy;
    }
    default: return state;
}
}

export default dialogsReducer;

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
