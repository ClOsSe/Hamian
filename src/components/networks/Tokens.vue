<template>
    <div class="col-12">
        <div class="d-flex">
            <div v-for="(token ,index) in tokens" :key="index" >
                <div class="card m-2 shadow-none border">
                    <div class="card-body p-3">
                        <div class="">
                        <div class="float-end ms-2">
                            <b-dropdown
                            toggle-class="font-size-16 text-muted p-0"
                            menu-class="dropdown-menu-end"
                            class="mb-2"
                            variant="white"
                            right
                            >
                            <template #button-content>
                                <i class="mdi mdi-dots-horizontal"></i>
                            </template>

                            <b-dropdown-item href="#">Open</b-dropdown-item>
                            <b-dropdown-item href="#">Edit</b-dropdown-item>
                            <b-dropdown-item href="#"
                                >Rename</b-dropdown-item
                            >
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item href="#"
                                >Remove</b-dropdown-item
                            >
                            </b-dropdown>
                        </div>
                        <div class="avatar-xs me-3 mb-3">
                            <div class="avatar-title bg-transparent rounded">
                            <!-- <i
                                class="bx bxs-folder font-size-24 text-warning"
                            ></i> -->
                            <img :src="token.icon" style="width:24px;background:none;border-radius:50%;border:1px solid lightgray" alt="">
                            </div>
                        </div>
                        <div class="d-flex">
                            <div class="overflow-hidden me-auto">
                            <h5 class="font-size-14 text-truncate mb-1">
                                <a
                                href="javascript: void(0);"
                                class="text-body"
                                >{{token.contract}}</a
                                >
                            </h5>
                            <p class="text-muted text-truncate mb-0">
                                {{token.decimals}} {{token.currency}}
                            </p>
                            </div>
                            <div class="align-self-end ms-2">
                            <p class="text-muted mb-0">{{token.chain}}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import {Vue, Component , Prop , Watch} from 'vue-property-decorator'
import AccountService from '@/services/accountService'
@Component({
    components:{}
})
export default class AccountList extends Vue{
    // @Prop({default:() =>{return []}}) value:any;
    tokens:any=[];
    mounted(){
        this.init()
    }
    async init(){
        this.tokens =  await AccountService.getTokensList();
        this.tokens = this.tokens.value
        console.log('this is token',this.tokens)
    }


}
</script>