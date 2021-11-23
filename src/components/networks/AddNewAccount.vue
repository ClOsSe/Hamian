<template>
    <div>
        <b-modal title="Add Account" centered v-model="value">
            ok
            
            <template dir="rtl" #modal-footer>
                <div dir="rtl" class="w-100 float-right">
                    <b-button
                    class="pr-3 m-1 pl-3"
                        variant="success"
                        size="sm"
                        @click="Add()">
                        Add
                    </b-button>
                    <b-button
                        variant="outline-secondary"
                        size="sm"
                        @click="closeModal()">
                        Close
                    </b-button>
                </div>
            </template>
        </b-modal>
    </div>
</template>
<script lang="ts">
import {Vue , Component , Prop , Watch} from "vue-property-decorator";
import StorageAccountModel from '@/models/storage/accountModel';
import NetworkModel from '@/models/networkModel';
import WalletService from '@/localService/walletService'
import AccountService from '@/services/accountService';

@Component({components:{}})

export default class AddNewAccount extends Vue{
    @Prop({default:()=>{false}}) value:boolean;
    privateKey:string='';
    selectedNet:NetworkModel;
    account:StorageAccountModel=new StorageAccountModel();
    findAccounts:StorageAccountModel[]=[];
    selectName:StorageAccountModel=new StorageAccountModel();
    
    @Watch('value')
    valueChanged(newVal:any){
        newVal == false?
        this.closeModal() : '';
    }
    closeModal(){
        this.$emit('close')
    }
  
//     mounted(){
//         // console.log('AddNewAccountModel:',this.$store.getters.getBlockChains.currentTet)
//         // this.addNetwork(this.$store.state.currentTet);
//     }
//     close(){
//         this.$emit('close')
//     }
//     addNetwork(model:NetworkModel)
//     {
//         console.log('fire')
//         // this.selectedNet=this.$store.getters.getBlockChains.currentTet;
//         this.account=new StorageAccountModel();
//         this.account.chainId=model.chainId;
//         this.account.blockchain=model.type;  
//     }
//     async checkNetwork()
//     {
//         var newAccount =await WalletService.existData(this.selectedNet.type,this.account.privateKey,this.selectedNet.history)
//         console.log('>>>>>>>>>>>>>>>',newAccount)
//         if(newAccount.account_names)
//         {
//             for(var a of newAccount.account_names)
//             {
//                 var acc=await AccountService.getAccount(a,this.selectedNet.history);
//                 var x=new StorageAccountModel();
//                 x.name=a;
//                 x.authority=acc.permissions.filter(p=>p.key==newAccount.publicKey)[0].authority
//                 this.findAccounts.push(x)// =;
//             }
//         }
//         console.log(newAccount)
//     }
//     async save()
//   {
//       this.account.name=this.selectName.name;
//       this.account.authority=this.selectName.authority; 
//       console.log('dddddddd',this.account)
//       var dt =await WalletService.addAccount(this.account);
//       this.close()
//   }
}
</script>