<template>
    <div class="col-12">
        <div class="col-12 box" v-for="(account , index) in value" :key="index">
            <div class="acc-box" v-if="account.name">
                <b-form-radio @click.native="setSelectedacc(account)"  name="some-radios" >
                <i class="bx bx-user font-size-16 align-middle me-1"></i>  {{account.name}}({{account.authority}})
                </b-form-radio>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import {Vue, Component , Prop , Watch} from 'vue-property-decorator';
import StorageService from '@/localService/storageService'
@Component({
    components:{}
})
export default class AccountList extends Vue{
    @Prop({default:() =>{return []}}) value:any;
    async setSelectedacc(account:any){
        account.chainId=this.$store.state.currentNet.chainId;
        console.log(account)

       var data =  await StorageService.saveSelectedAccount(account);
       if(data.message == true){
           console.log('account selected')
       }
    }

}
</script>
<style lang="scss" scoped>
.box{
    background: #f8f8fb;
    width: 100%;
    box-shadow: 0 0.75rem 1.5rem rgb(18 38 63 / 3%);
    .acc-box{
        box-shadow: 0 0.75rem 1.5rem rgb(18 38 63 / 3%);
        background: #ffffff;
        padding: 10px ;
        margin: 15px;
    }
}
</style>