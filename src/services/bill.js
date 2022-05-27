const id = require('../config/randomString');
const axios = require('axios');
const url = 'https://sandbox.vtpass.com/api/pay'

const edu = async(serviceID, username, password)=>{
    try{
        const data = {
            request_id: id(),
            serviceID: serviceID,
            variation_code: "prepaid",
            phone: "08011111111",
            billersCode: "1111111111111",
            amount: 500
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
module.exports = edu;
