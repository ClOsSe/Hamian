<template>
    <div class="col-12">
        <div class="col-12 box d-flex">
            <div class="col-6 " align="left">
                Available:
            </div>
            <div class="col-6 " align="right">
                {{resourcesInfo.available}}
            </div>
        </div>

        <div class="col-12 box d-flex">
            <div class="col-6 " align="left">
                Refunding:
            </div>
            <div class="col-6 " align="right">
                {{resourcesInfo.refunding}}
            </div>
        </div>

        <div class="col-12 box d-flex">
            <div class="col-6 " align="left">
                CPU Staked:
            </div>
            <div class="col-6 " align="right">
                {{resourcesInfo.CPUStaked}}
            </div>
        </div>

        <div class="col-12 box d-flex">
            <div class="col-6 " align="left">
                NET Staked:
            </div>
            <div class="col-6 " align="right">
                {{resourcesInfo.NetStaked}}
            </div>
        </div>

        <div class="col-12 box d-flex">
            <div class="col-6 " align="left">
                Staked by Others:
            </div>
            <div class="col-6 " align="right">
                {{resourcesInfo.stakedbyOthers}}
            </div>
        </div>

        <div class="col-12 box d-flex">
            <div class="col-6 " align="left">
                TotalREX:
            </div>
            <div class="col-6 " align="right">
                {{resourcesInfo.totalREX}}
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
    resourcesInfo:any={
        available:'2 TLOS',
        refunding:'0 TLOS',
        CPUStaked:'0.0000 TLOS',
        NetStaked:'0.0000 TLOS',
        totalREX:'0.002 TLOS',
        stakedbyOthers:'0.0000 TLOS',
    }

}
</script>
<style lang="scss">
.box{
  background: #ffffff;
  width: 98%;
  box-shadow: 0 0.75rem 1.5rem rgb(18 38 63 / 10%);

}
</style>
