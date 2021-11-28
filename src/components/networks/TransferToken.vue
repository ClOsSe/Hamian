<template>
    <div class="col-12">
<div>
        <b-tabs
        class="box"
            active-nav-item-class="font-weight-bold text-uppercase text-primary"
            active-tab-class="font-weight-bold text-secondary"
            content-class="mt-3"
        >
            <b-tab title="TRANSFER TOKEN" align="left"  active>
                <div class="col-12 px-1 mt-3" dir="ltr">
                    <h5 class="font-size-15 mb-4">Send To : <i class="mdi mdi-information text-primary"></i></h5>
                    <b-form-input
                        id="input-2"
                        v-model="transferToken.sendTo"
                        type="text"
                    ></b-form-input>

                </div>
                <div class="col-12 px-1 mt-3" dir="ltr">
                    <h5 class="font-size-15 mb-4">Amount:</h5>
                    <div class="btn-group col-12 me-1 mt-2">
                        <b-form-input
                            id="input-2"
                            v-model="transferToken.amount"
                            type="text"
                        ></b-form-input>
                        <b-dropdown dropleft variant="primary" >
                            <template v-slot:button-content>
                                {{transferToken.customToken.title}}
                                <i class="mdi mdi-chevron-down"></i>
                            </template>
                            <div align="left" v-for="(token , index) in option" :key="index">
                                <b-dropdown-item @click="onItemClick(token)" href="javascript: void(0);">{{token.title}}</b-dropdown-item>
                            </div>
                        </b-dropdown>
                    </div>
                    <div class="col-12 px-1 d-flex mt-3" dir="ltr">
                        <div class="col-6">
                            <h5 @click="sendEntireBalance()" class="font-size-15 text-primary ponter mb-4">Send entire balance</h5>
                        </div>
                        <div align="right" class="col-6">
                            <h5 @click="showCustomToken = true" class="font-size-15 text-primary pointer mb-4">Use custom token</h5>
                        </div>
                    </div>
                    <div v-if="showCustomToken == true" class="col-12 d-flex mt-3" dir="ltr">
                        <div class="col-12 d-flex">
                            <div class="col-6 px-1">
                                <h5 class="font-size-15 mb-4">Symbol:</h5>
                                <b-form-input
                                    id="input-2"
                                    v-model="transferToken.symbol"
                                    type="text"
                                ></b-form-input>
                            </div>
                            <div class="col-6 px-1">
                                <h5 class="font-size-15 mb-4">Contract:</h5>
                                <b-form-input
                                    id="input-2"
                                    v-model="transferToken.contract"
                                    type="text"
                                ></b-form-input>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-12 px-1 my-1" v-if="showCustomToken == true">
                        <h5 @click="showCustomToken = false"  class="font-size-15 pointer text-primary mb-4">Don't use custom token / contract</h5>
                    </div>
                </div>
                <div class="col-12 px-2 mt-3" dir="ltr">
                    <h5 class="font-size-15  mb-4">Memo (optional) :</h5>
                    <b-form-input
                        id="input-2"
                        v-model="transferToken.memo"
                        type="text"
                    ></b-form-input>
                </div>
                <div class="col-12 mt-3" align="center">
                    <b-button class="m-1"  variant="primary">
                    Teransfer  {{transferToken.amount}}  Telos
                    </b-button>
                </div>
            </b-tab>
            <b-tab title="TERANSFER NFTs" align="left">
                <div class="col-12 mt-3">
                    <table class="table table-nowrap mb-0">
                        <tbody>
                        <tr>
                            <th scope="row">Bought :</th>
                            <td>25521 Bytes ≈ 0.9764 TLOS</td>
                        </tr>
                        <tr>
                            <th scope="row">In Use :</th>
                            <td>3124 Bytes ≈ 0.1195 TLOS</td>
                        </tr>
                        <tr>
                            <th scope="row">Available :</th>
                            <td>22397 Bytes ≈ 0.8569 TLOS</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-12 mt-3">
                    <h5 class="font-size-15 mb-4">Amount of RAM to Sell (Bytes)</h5>
                    <b-form-input
                        id="input-2"
                        v-model="buySellRAM.RAMSellAmount"
                        type="text"
                    ></b-form-input>
                    <div>
                        <b-button class="m-1" @click="calculateSellRAMAmount(25)" variant="outline-secondary">25%</b-button>
                        <b-button class="m-1" @click="calculateSellRAMAmount(50)" variant="outline-secondary">50%</b-button>
                        <b-button class="m-1" @click="calculateSellRAMAmount(75)" variant="outline-secondary">75%</b-button>
                        <b-button class="m-1" @click="calculateSellRAMAmount(100)" variant="outline-secondary">100%</b-button>
                    </div>
                    <p class="text-white">Selling {{buySellRAM.RAMSellAmount}} Bytes for {{buySellRAM.TELOSCustAmount}} TLOS</p>
                </div>
                <div class="col-12 mt-3" align="center">
                    <b-button class="m-1"  variant="primary">
                    Sell RAM
                    </b-button>
                </div>
                
            </b-tab>
        </b-tabs>
        </div>
    </div>
</template>
<script lang="ts">
import {Vue, Component , Prop , Watch} from 'vue-property-decorator'
@Component({
    components:{}
})
export default class AccountList extends Vue{
    @Prop({default:() =>{return []}}) value:any;
    buySellRAM:any=[];
    showCustomToken:boolean=false;
 transferToken:any={
    customToken:{
        title:''
    },
    amount:0,
    sendTo:'',
    memo:'',
    symbol:'',
    contract:'',
  }
  option:any=[    
    
    ]
    sendEntireBalance(){}

    onItemClick(token:any){
        this.transferToken.customToken = token;
    }
  
//  transferToken:any=[];
    mounted(){
        this.buySellRAM = this.value;
        // this.transferToken = this.value;
    }


}
</script>
<style lang="scss" scoped>
.pointer{
    cursor: pointer;
}
</style>