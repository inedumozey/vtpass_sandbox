const id = require('../config/randomString');
const axios = require('axios');
const url = 'https://sandbox.vtpass.com/api/pay'

const data = async(serviceID, username, password)=>{
    try{
        const data = {
            request_id: id(),
            serviceID: serviceID,
            billersCode: "08036000347",
            phone: "08011111111",
            amount: 50,
            variation_code: (function(){
                if(serviceID == 'mtn-data'){
                    return "mtn-10mb-100"
                }
                if(serviceID == 'airtel-data'){
                    return "airt-50"
                }
                if(serviceID == 'etisalat-data'){
                    return "eti-100"
                }
                if(serviceID == 'glo-data'){
                    return "glo100"
                }
                else{
                    return ""
                }
                
            }())
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
    catch(err){
        console.log(err.message);
    }
}
module.exports = data;
