export const userSelector = (state)=>{
    // tra ve user
    // co s boi vi luu gia tri o store la users
    //va links
    console.log(state);
    return state.users.user;
}
export const tokenSelector = (state)=>{
    console.log(state);
    return state.users.token;
}
export const urlSelector = (state)=>{
    console.log(state);
    return state.links.url;
}
export const shortUrlSelector = (state)=>{
    console.log(state);
    return state.links.shortUrl;
}
