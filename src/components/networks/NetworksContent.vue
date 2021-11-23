<template>
    <div class="col-12  account-list-body" >
        <p style="display:none">{{counter}}</p>
        <div class="col-12">
            <div v-if="value == 'accountList'">
                <AccountList v-model="data.accountList" />
            </div>
            <div v-if="value == 'resources'">
                <Resources v-model="data.resources" />
                <ResourceInformation v-model="data.resource" />
            </div>
            <div v-if="value == 'buySellRAM'  ">
                <Resources v-model="data.resources" />
                <!-- <BuySellRAM /> -->
            </div>
            <div v-if="value == 'stakeCpuNet'">
                <Resources v-model="data.resources" />
                <!-- <StakeCpuNet /> -->
            </div>
            <div v-if="value == 'tokens'">
                <Tokens v-model="data.tokens" />
            </div>
            <div v-if="value == 'transferToken'">
                <TransferToken v-model="data.transferToken" />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import {Vue , Component ,Prop,Watch} from 'vue-property-decorator';
import AccountService from '@/services/accountService';
import WalletService from '@/localService/walletService';
import AccountList from '@/components/networks/AccountList.vue'
import Resources from '@/components/networks/Resources.vue'
import ResourceInformation from '@/components/networks/ResourceInformation.vue'
import Tokens from '@/components/networks/Tokens.vue'
import TransferToken from '@/components/networks/TransferToken.vue'


@Component({
    components:{
        AccountList,
        Resources,
        ResourceInformation,
        Tokens,
        TransferToken,
    }
})
export default class NetworksContent extends Vue{
    @Prop({default:() =>{return []}}) value:any;
    counter:number=0;
    showCustomToken:boolean=false;
    buyWith:string='TELOS'
    selectedNFTs:any=[];
    stakeCPUorNET:any={
        stakReciver:'mohamamd',
        CPUAmountToStake:0,
        NETAmountToStake:0,
    };
    unStakeCPUorNET:any={
        accountHoldStake:[
            'mohammad','vahid','reza'
        ],
        selectedAccountForUnStake:'',
        amountCPUUnstake:0,
        amountNETUnstake:0,
    }
    buySellRAM:any={
        RAMBuyAmount:0,
        RAMConvertedToBytes:0,
        RAMSellAmount:0,
        TELOSCustAmount:0,
        showCustomToken:false,
    }
    tokenList:any=[]
    RAMRevicer:string=''
    nftList:any=[
        {title:'test1'},
        {title:'test2'},
    ]
    transferToken:any={
        customToken:'',
        amount:0,
        sendTo:'',
        memo:'',
        symbol:'',
        contract:'',
    }
    data:any={
        accountList:[],
        resources:[],
        tokens:[],
        transferToken:[],
    };
    resource:any={
        ram:{used:30.25,total:'24.92'},
        cpu:{used:55.50,total:' 5.07'},
        net:{used:20,total:'34.5'},
    }
    resourcesInfo:any={
        available:'2 TLOS',
        refunding:'0 TLOS',
        CPUStaked:'0.0000 TLOS',
        NetStaked:'0.0000 TLOS',
        totalREX:'0.002 TLOS',
        stakedbyOthers:'0.0000 TLOS',
    }
    mounted(){
        this.selectedNFTs = 'SelectNFT';
    }
    @Watch('value')
    valueChanged(newValue:any){
        console.log('new Value',newValue);
        
        if(newValue == 'accountList'){
        this.getAccounts();
        }
        else if(newValue == 'resources'){
        this.getResources();
        }
        else if(newValue == 'buySellRAM'){
        this.getResources();
        this.counter++
        }
        else if(newValue == 'stakeCpuNet'){
        this.getResources();
        this.counter++
        }
        else if(newValue == 'tokens'){
        // this.tokens =
        // this.getTokens();
        }
        else if(newValue == 'transferToken'){
        this.counter++
        // this.transferToken =
        // this.getTransferToken();
        }
    }
    selectNft(nft:any){
    this.selectedNFTs = nft.title;
  }
  async getResources(){
    this.data.resources = await AccountService.getAccount(this.$route.params.chainId)
    this.counter++;
  }
  async getAccounts(){
    this.data.accountList = await WalletService.getAccounts();
    this.counter++;
  }
  sendEntireBalance(){}
  
  onItemClick(token:any){
    this.transferToken.customToken = token;
    console.log(this.transferToken.customToken);
    
  }
}
</script>
<style lang="scss" scoped>
.account-list-body{
    background: #ffffff;
    box-shadow: 0 0.75rem 1.5rem rgb(18 38 63 / 3%);
    min-height: 100vh;
    .account-list-boxs-parent{
    min-height: 85vh;
    .account-list-internal-box{
        border-radius: 10px;
        .internal-titles{
        font-size: 22px;
        }
        .user-icon{
        width: 30px;
        }
    }
    }

}
.resource-box{
  width:150px;
  height:200px;
  border-radius:20px
}
</style>