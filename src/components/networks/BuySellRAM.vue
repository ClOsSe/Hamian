<template>
    <div class="col-12 text-center py-2">
        <div>
        <b-tabs
        class="box"
            active-nav-item-class="font-weight-bold text-uppercase text-primary"
            active-tab-class="font-weight-bold text-secondary"
            content-class="mt-3"
        >
            <b-tab title="BUY RAM" align="left"  active>
                <div class="col-12 mt-3" dir="ltr">
                    <h5 class="font-size-15 mb-4">RAM Reciver :</h5>
                    <b-form-input
                        id="input-2"
                        v-model="buySellRAM.RAMRevicer"
                        type="text"
                    ></b-form-input>

                </div>
                <div class="col-12 mt-3" dir="ltr">
                    <h5 class="font-size-15 mb-4">Buy in TELOS or Bytes?</h5>
                    <div class="d-flex">
                    <b-form-radio  v-model="buySellRAM.buyWith" val="TELOS"   name="some-radios" >
                        <p class="m-1">
                            TELOS
                        </p>
                    </b-form-radio>
                    <b-form-radio  class="mx-2" v-model="buySellRAM.buyWith" val="Bytes"   name="some-radios" >
                        <p class="m-1">
                            Bytes
                        </p>
                    </b-form-radio>
                    </div>

                </div>
                <div class="col-12 mt-3" dir="ltr">
                    <h5 class="font-size-15 mb-4">Amount of RAM to Buy in TELOS</h5>
                    <b-form-input
                        id="input-2"
                        v-model="buySellRAM.RAMBuyAmount"
                        type="text"
                    ></b-form-input>
                    <h5 class="font-size-12 mb-4">
                        <p class="m-1">
                            ≈ {{buySellRAM.RAMBuyAmount}} Bytes
                        </p>
                    </h5>

                </div>
                <div class="col-12 mt-3" align="center">
                    <b-button class="m-1"  variant="primary" v-show="!buySellRAM.RAMBuyAmount">
                    Buy RAM
                    </b-button>
                    <b-button class="m-1"  variant="primary" v-show="buySellRAM.RAMBuyAmount">
                    Buy {{buySellRAM.RAMBuyAmount}} {{buySellRAM.buyWith}} of RAM for {{buySellRAM.RAMRevicer}}
                    </b-button>
                </div>
               
            </b-tab>
            <b-tab title="SELL RAM" align="left">
                <div class="col-12 mt-3">
                    
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
    @Prop({default:() =>{return []}}) buySellRAM:any;
 
}
</script>
<style lang="scss" scoped>
.box{
  margin:5px;
  margin-top:0px;

}
</style>