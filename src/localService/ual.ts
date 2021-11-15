import { Authenticator, Chain, UAL } from "universal-authenticator-library";
// import { KeycatAuthenticator } from "@telosnetwork/ual-telos-keycat";
import { Scatter } from "ual-scatter";
import { Wombat } from 'ual-wombat'
import { Sqrl } from "@smontero/ual-sqrl";
import { Anchor } from "ual-anchor";
import {UalHamian} from 'ual-hamian'
import { HamianConfig } from 'hamian';
 
const appName='Xtorage';
const chain:Chain = {
    chainId: '4667b205c6838ef70ff7988f6e8257e8be0e1284a2f59699054a018f743b1d11',
    rpcEndpoints: [
    {
        protocol: 'https',
        host: 'telos.caleos.io',
        port: 443
    }
    ]
};
var hamianConfig:HamianConfig={
    useChainId:false,
    appId:'',
    appTitle: 'Xtorage',
    serverUrl:'https://api.hamian-wallet.com/',
    botName:'hamianwalletbot'};

const authenticators:Authenticator[] = [
    new UalHamian([chain], hamianConfig), 
    new Wombat([chain], { appName: appName}),
    new Anchor([chain], { appName: appName }),
    new Scatter([chain], { appName: appName }),  
    // new Sqrl([chain], { appName:appName }),
];

//export default new UAL([chain], "ual", authenticators);
export  default class UalModel
{
    static ual=new UAL([chain], "ual", authenticators);
    static authenticators=authenticators;
}
