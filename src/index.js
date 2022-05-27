const airtime = require("./services/airtime")
const bill = require("./services/bill")
const edu = require("./services/edu")
const tv = require("./services/tv")
const data = require("./services/data")

// tv services = showmax, dstv, gotv and startimes

// artime services = mtn, airtel, etisalat and glo

// data services = mtn-data, airtel-data, etisalat-data and glo-data

// education (edu) services = waec-registration, waec and jamb 

// electricity(bill) services = ikeja-electric, eko-electric, kano-electric, portharcourt-electric, jos-electric, ibadan-electric, kaduna-electric and abuja-electric

//weac is for result checker

//tv("showmax", "inedumozey@gmail.com", "my08036000347")
//airtime("mtn", "inedumozey@gmail.com", "my08036000347")
//edu("jamb", "inedumozey@gmail.com", "my08036000347")
//bill("portharcourt-electric", "inedumozey@gmail.com", "my08036000347")
//data("glo-data", "inedumozey@gmail.com", "my08036000347")

module.exports = {tv, airtime, data, edu, bill, data}


