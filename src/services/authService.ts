import BaseServices from "./baseServices";

export default class AuthService
{
    static async requestLogin(user:string) 
    {
        try{ 
            return await BaseServices.post('webEndpoint/requestLogin',{user});

        }catch(exp){
            return false;
        }

    }
    static async isValid(id:string) 
    {
        try{ 
            return await BaseServices.postData('webEndpoint/isValid',{id});

        }catch(exp){
            return false;
        }

    }
    static async isLogin() 
    {
        if(!window.localStorage.token) return '';
        try{ 
            var dt= await BaseServices.post('webEndpoint/isLogin',{});
            if(!dt)return '';
            return dt;
        }catch(exp){
            return '';
        } 
    }
}