 
import BaseServices from "./baseServices";

export default class StorgeService
{
    
    static async createFolder(folderId:number,folderName:string,comment:string) 
    {
        try{ 
            var data:any={folderName,comment};
            if(folderId>-1)
            {
                data.folderId=folderId;
            }
            return await BaseServices.post('dstor/createfolder',data);

        }catch(exp){
            return false;
        } 
    }
    static async deleteFolder(folderId:number) 
    {
        try{   
            return await BaseServices.post('dstor/deletefolder',{folderId:folderId.toString()});

        }catch(exp){
            return false;
        } 
    }
    static async deleteFile(hash:string){
        {
            try{
            return await BaseServices.post('dstor/deleteFile',{hash});
            }catch(exp){
                return false;
            }
        }
    }
    static async getAccount() 
    {
        try{ 
            return await BaseServices.post('dstor/getAccount',{});

        }catch(exp){
            return false;
        } 
    }
    static async getAmount(name) 
    {
        try{ 
            var dt= await BaseServices.post('dstor/getAmounts',{});
            return dt.filter(p=>p.name==name)[0].amount;
        }catch(exp){
            return false;
        } 
    }
    static async getfolder(folderId) 
    {
        try{ 
            var data:any={};
            if(folderId>-1)
            {
                data.folderId=folderId+'';
            }
            return await BaseServices.post('dstor/getfolder',data);

        }catch(exp){
            return false;
        } 
    }
    static async moveFileOrFolder(obj:any){
        if(obj.type=='file')
        {
            return await BaseServices.post('dstor/moveFile',{hash:obj.sourceId,folderId:obj.destinationId});

        }
        else
        {
            return await BaseServices.post('dstor/moveFolder',{source:obj.sourceId,folderId:obj.destinationId});
            
        } 
    }
    static async getProtectedList(){
        try{ 
            return await BaseServices.post('/dstor/getProtectedFiles',{});

        }catch(exp){
            return false;
        } 
    }
    static async activeService(name){
        try{ 
            return await BaseServices.post('dstor/activeService',{name});

        }catch(exp){
            return false;
        } 
    }
    static async getService(id){
        try{ 
            return await BaseServices.post('dstor/getService',{id});

        }catch(exp){
            return false;
        } 
    }
    static async setAs(hash,type){
        try{ 
            return await BaseServices.post('dstor/setAs',{hash,type});

        }catch(exp){
            return false;
        } 
    }
    static async getRecentFiles(service:string){
        try{
            return await BaseServices.post('dstor/recentFiles',{service})
        }catch(exp){
            return false;
        }
    }
     
}