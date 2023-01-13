const AuthTokenVerify = () =>{
    let tokenData  = window.localStorage.getItem('token');
    if(tokenData){
        return {tokenData , status:true, isAuthenticated:true}
    }
    else{
        return { status:false, isAuthenticated:false}
    }
}
export default AuthTokenVerify


