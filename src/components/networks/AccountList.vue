<template>
    <div class="col-12">
        <div class="col-12 box" v-for="(account , index) in accountList" :key="index">
            <div class="acc-box" v-if="account.name">
                <i class="mdi mdi-account"></i> {{account.name}}({{account.authority}})
            </div>
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
    accountList:any=[];
    mounted(){
        this.accountList = this.value;
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