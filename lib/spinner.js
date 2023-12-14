var spin = require('spinnies')

var spinner = { 
"interval": 120,
"frames": [
"🕛 Gwar",
"🕐 GwarGu",
"🕑 GwarGura",
"🕒 GwarGura By",
"🕓 GwarGura By Ma",
"🕔 GwarGura By Mann",
"🕕 GwarGura By MannHost",
"🕖 GwarGura By Mann",
"🕗 GwarGura By Ma",
"🕘 GwarGura By",
"🕙 GwarGura",
"🕚 GwarGu",
"🕛 Gwar"
]}

let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
module.exports.start = (id, text) => {
spins.add(id, {text: text})
}