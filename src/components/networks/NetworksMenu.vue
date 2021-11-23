<template>
    <div class="col-12  menue-body" >
        <div class="mb-3 d-grid account">
            <b-dropdown 
                toggle-class="btn-block w-100 "
                variant="light"
                
            >
                <template #button-content>
                <i class="mdi mdi-plus me-1"></i> Account
                </template> 
                <b-dropdown-item @click="addNewAccount()" 
                v-b-modal.modal-standard >
                    <i class="mdi mdi-account-plus me-1"></i>
                     Add Account
                </b-dropdown-item
                >
                <b-dropdown-item  @click="selectedItem('accountList')"  >
                <i class="mdi mdi-view-list-outline me-1"></i> Account List</b-dropdown-item >
            </b-dropdown>
        </div>
        <div class="mb-3 d-grid account" @click="selectedItem('buySellRAM')"  >
            <b-button 
                toggle-class="btn-block w-100 "
                variant="light">
                Buy / Sell RAM
            </b-button>
        </div>
        <div class="mb-3 d-grid account" @click="selectedItem('stakeCpuNet')"  >
            <b-button 
                toggle-class="btn-block w-100 "
                variant="light">
                Stake CPU/NET
            </b-button>
        </div>
        <div class="mb-3 d-grid account" @click="selectedItem('tokens')"  >
            <b-button 
                toggle-class="btn-block w-100 "
                variant="light">
                Tokens
            </b-button>
        </div>
        <div class="mb-3 d-grid account" >
            <b-button @click="selectedItem('transferToken')"  
                toggle-class="btn-block w-100 "
                variant="light">
                Transfer Token
            </b-button>
        </div>
    </div>
</template>

<script lang="ts">
import {Vue , Component , Prop} from 'vue-property-decorator'
import CommonService from '@/services/commonService'

// import AddNewAccount from 'src/components/wallet/networks/add_new_account/AddNewAccount.vue'

@Component({
    components:{
        // AddNewAccount,
    }
})
export default class NetworkMenu extends Vue{
    @Prop({default:() =>{return []}}) chainId:any;

    resources:any=[];
    tokenList:any=[];
    nets:any=[];
    accountInformation:any=[];
    showAddNewAccountPopUp:boolean=false;

    mounted(){
    this.getNets();
    }
    async getNets(){
    this.nets = await CommonService.getNetworks();
    }
    selectedItem(data:string){
    this.$emit('selectedItem',data)
    }
    addNewAccount(){
    this.showAddNewAccountPopUp = true;
    }
}
</script>

<style lang="scss" scoped>
.menue-body{
    box-shadow: 0 0.75rem 1.5rem rgb(18 38 63 / 3%);
    min-height:100vh;
    background: #ffffff;
  .menue-boxs-parent{
    min-height:100vh;
  }
  .menue-internal-box{
    border-radius: 10px;
    .internal-titles{
      font-size: 16px;
    }
  }
  
}
</style>