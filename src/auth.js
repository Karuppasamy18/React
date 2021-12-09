const TOKEN_KEY = 'key';

export const loginauth = () => {
    localStorage.setItem(TOKEN_KEY, 'TestLogin');
}

export const logoutauth = () => {
    localStorage.removeItem(TOKEN_KEY);
    // isLogin=false
}

export const isLogin = () => {
   
    if (localStorage.getItem(TOKEN_KEY)) {
            
        return true;       
    }

    return false;
}
// export const remove=()=>
// {
//     localStorage.removeItem(TOKEN_KEY);
// }