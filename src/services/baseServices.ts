import Config from "@/common/config";
import axios from 'axios';
export default class BaseServices
{
    static async post(url:string,data:any)
    {
       var path=Config.server+url;
       var headers={};
       if(window.localStorage.token)
       {
           headers['authorization']=window.localStorage.token
       }
       var dt = await axios.post(path,data,{headers});  
       return dt.data.data;
    }
    static async postData(url:string,data:any)
    {
       var path=Config.server+url;
       var headers={};
       if(window.localStorage.token)
       {
           headers['authorization']=window.localStorage.token
       }
       var dt = await axios.post(path,data,{headers}); 
       return dt.data;
    }
    static postForm(url:string,params:any=null,image:any=null,headers:any=null,progressFunc:any=null)
    {
      var bodyFormData = new FormData();
      for(var a in params)
      {
        bodyFormData.set(a, params[a]);
      }
      if(image)
      {
        bodyFormData.append('fileItem', image);
      }
      if(!headers)
        headers={}
      headers['authorization']=window.localStorage.token ;
   
      var mainurl =Config.server;
  
      const config = {
        onUploadProgress: function(progressEvent:any) {
          var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
          console.log('-------->',percentCompleted)
        }
      }
  
      return  new Promise((res,rej)=>{
        axios({
          onUploadProgress:(progressEvent:any)=>{
            var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
            if(progressFunc)
            {
              progressFunc(percentCompleted);
            }
          },
          method: "POST",
          "url": mainurl +url,
          data:bodyFormData,
          headers },).then(
              (data:any)=>{
            res(data.data)
          }
         ).catch((err)=>{
           
  
          rej(err.response);
        })
  
      })
    }
}