const id = require('../config/randomString');
const axios = require('axios');
const url = 'https://sandbox.vtpass.com/api/pay'

const tv = async(serviceID, username, password)=>{
    try{
        if(serviceID =='dstv' || serviceID =='gotv' || serviceID =='startimes'){
            const data = {
                request_id: id(),
                serviceID: serviceID,
                billersCode: "1212121212",
                phone: "08011111111",
                variation_code: (function(){
                    if(serviceID === "dstv"){
                        return "dstv-padi"
                    }
                    if(serviceID === "gotv"){
                        return "gotv-lite"
                    }
                    if(serviceID === "startimes"){
                        return "nova"
                    }
                    else{
                        return ""
                    }
                })(),
                subscription_type: "change",
                amount: 50,
                quantity: 1
            };
    
            const res = await axios.post(url, data, {
                auth: {
                    username: username,
                    password: password
                }
            });
            
            const info = {
                status: res.data.content.transactions.status,
                product_name: res.data.content.transactions.product_name,
                response_description: res.data.response_description,
                requestId: res.data.requestId
            }
            console.log(res.data);
        }
        else if(serviceID =='showmax'){
            const data = {
                request_id: id(),
                serviceID: serviceID,
                billersCode: "08011111111",
                phone: "08011111111",
                variation_code: "full",
                amount: 50
            };
    
            const res = await axios.post(url, data, {
                auth: {
                    username: username,
                    password: password
                }
            });
            
            const info = {
                status: res.data.content.transactions.status,
                product_name: res.data.content.transactions.product_name,
                response_description: res.data.response_description,
                requestId: res.data.requestId
            }
            console.log(res.data);
        }
    }
    catch(err){
        console.log(err.message);
    }
}
module.exports = tv;
