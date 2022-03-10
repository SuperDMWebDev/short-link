export const userSelector = (state)=>{
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
