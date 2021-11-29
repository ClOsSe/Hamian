
<template>
  <Layout>
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-5">
        <div class="card overflow-hidden">
          <div class="bg-soft bg-primary">
            <div class="row">
              <div class="col-7">
                <div class="text-primary p-4">
                  <h5 class="text-primary">Welcome Back !</h5>
                  <p>Sign in to continue to Hamian.</p>
                </div>
              </div>
              <div class="col-5 align-self-end">
                <img
                  src="@/assets/images/profile-img.png"
                  alt
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
          <div class="card-body pt-0">
            <div>
              <router-link tag="a" to="/">
                <div class="avatar-md profile-user-wid mb-4">
                  <span class="avatar-title rounded-circle bg-light">
                    <img src="@/assets/picture/hamian.svg" alt height="34" />
                  </span>
                </div>
              </router-link>
            </div>
            
            <b-form class="p-2" @submit.prevent="tryToLogIn">
            <div  class="col-12 row" align="center">
            <h5 class="text-primary">via {{data.origin}}</h5>
                <b-dropdown  variant="outline-secondary " id="dropdown-1" :text="selectedAccount.name" class="m-md-2 w-100">
                    <div class="col-12" v-for="(userAccount , index) in account" :key="index">
                    <b-dropdown-item  class="col-12 w-100"
                    >{{userAccount.name}}</b-dropdown-item>
                    </div>
                </b-dropdown>
            </div>
              <div class="mt-5 d-grid">
                <b-button type="submit" variant="primary" class="btn-block"
                  >Log In</b-button
                >
              </div>
              <div class="mt-5 text-center">
                <p class="text-gray">By logging into this application you will be allowing in to interact with your Hamian.</p>
              </div>
            </b-form>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->

        
        <!-- end row -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
    <div class="col-12" v-if="showConfirm == true">
        <Confirm  
        v-model="showConfirm"
        acceptColor="red"
        rejectColor="white"
        @accept="acceptAddToBlackList()" 
        @reject="rejectAddToBlackList()" 
        title="Warning" 
        :description="`Are you sure you whant to add` + data.origin + `to blacklist`" />
    </div>
  </Layout>
</template>

<script lang="ts">
import Layout from "../../layouts/auth";
import {Vue , Component , Prop} from "vue-property-decorator"

import SocketService from "@/localService/socketService";
import LoginRequest from "@/models/local/loginRequest";
import RequestTypes from '@/models/local/RequestTypes'
import LoginResponse from "@/models/local/loginResponse";
import StorageAccountModel from "@/models/storage/accountModel";
import Confirm from '@/components/common/Confirm.vue'
import WalletService from "@/localService/walletService";
// const remote = require('electron').remote;
const remote = window.require('electron');
// import {remote} from 'electron'

@Component({
    components:{
    Layout,
    Confirm
    }
})
export default class LocalLogin extends Vue{
  data:LoginRequest=new LoginRequest();
  selectedAccount:StorageAccountModel=new StorageAccountModel();
  account:StorageAccountModel[]=[];
  showConfirm:boolean=false;
  counter:number=0;
  async reciveLoginRequest(data:any)
  {
    this.data=new LoginRequest(data);
    console.log('----------------->>>>>>>>',this.data)
      console.log('>>>>>>>>',this.data.chainId,await WalletService.getAccounts())
      this.account=(await WalletService.getAccounts()).filter(p=>p.chainId==this.data.chainId);
      console.log('this.account',this.account)
      this.counter++;

  }
  mounted() {
    SocketService.addEvent(RequestTypes.getOrRequestIdentity,this.reciveLoginRequest); 
  }
  accept()
  {
    var lres=new LoginResponse(this.data,this.selectedAccount)
    
    var appkey=this.data.appkey;
    // var chinid=this.data.chainId;
    lres.key=appkey;//+chinid;
    WalletService.saveConnection(lres)
    SocketService.sendData(this.data,lres);
    var window = remote.getCurrentWindow();
       window.close();
    
  }
  Deny(){
    console.log('deny')
  }
  addToBlackList(){
    console.log(this.showConfirm);
    
    this.showConfirm = true;
  }
  acceptAddToBlackList(){
    console.log('accept');
  }
  rejectAddToBlackList(){
    console.log('reject');
    this.showConfirm = false;
  } 
}
</script>

<style>
.dropdown-menu{
 width: 100%;   
 text-align: center;
}    
</style>
