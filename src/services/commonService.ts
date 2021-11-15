import Config from "@/common/config";
import BaseServices from "./baseServices";

export default class CommonService
{
    static async checkVersion() 
    {
        try{ 
            var version = await BaseServices.post('webEndpoint/getVersion',{});
            if(version.serial>Config.serial)
            {
                return true;
            }
        }catch(exp){
            return false;
        } 
    }
    static async getPackage() 
    {
        try{ 
            return await BaseServices.post('webEndpoint/getPackage',{});

        }catch(exp){
            return false;
        } 
    }
    static async getContent(name:string) 
    {
        try{ 
            return await BaseServices.post('webEndpoint/getContent',{name});

        }catch(exp){
            return false;
        } 
    }
    
}