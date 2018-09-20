import $ from 'jquery';

export const USER_UPDATE = "users:updateUser";
export const SHOW_ERROR = "user:showError";


export function updateUser(newUser) {
    return {
        type:USER_UPDATE,
        payload: {
            user: newUser
        }
    }
}
export function showError() {
    return {
        type: SHOW_ERROR,
        payload: {
            error: "ERROR!"
        }
    }
}
export function apiRequest() {
    return dispatch => {
        $.ajax({
            url: 'https://google.com',
            success() {
                console.log("success");
                
            },
            error(){
                console.log("error")
                dispatch(showError())
            }
        })
    }
}