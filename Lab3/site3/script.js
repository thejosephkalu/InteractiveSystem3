const activity = document.querySelector("#activity");
const participants = document.querySelector("#participants");
const price = document.querySelector("#price");
const type = document.querySelector("#type");




const url ="https://www.boredapi.com/api/activity";
async function getData()
{
const resp=await fetch(url);
//console.log(resp);
const respData = await resp.json();
console.log(respData);
console.log(respData.activty)

activity.innerHTML = respData.activity;
participants.innerHTML=respData.participants;
price.innerHTML=respData.price;
type.innerHTML=respData.type;

}

getData();


