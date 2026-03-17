const TopluyoAPP = {}
TopluyoAPP._events = [];
TopluyoAPP.on = function(type,event){ TopluyoAPP._events.push({type,event}) }
window.addEventListener('message', (event)=>{
  console.log("I3",event.data)
  if (!event.origin.endsWith("topluyo.com")) return;
  let datas = (event.data)
  if(!Array.isArray(datas)){
    datas = [datas]
  }
  for(let data of datas){
    if(data.action){
      TopluyoAPP._events.filter(e=>e.type==data.action).map(e=>e.event(data.parameters.data,data.parameters.source))
    }
    try{
      TopluyoAPP._events.filter(e=>e.type=="*" ).map(e=>e.event({type:data.action,data:data.parameters.data,source:data.parameters.source}))
    }catch(e){
      console.warn(e)
    }
  }
})
TopluyoAPP.up = function(action,data){
  let message = {action,parameters:data}
  try{window.parent.postMessage(message,"https://topluyo.com") }catch(e){}
  try{window.parent.postMessage(message,"https://alfa.topluyo.com") }catch(e){}
  try{window.parent.postMessage(message,"https://app.topluyo.com") }catch(e){}
}

document.addEventListener("DOMContentLoaded",function(){
  TopluyoAPP.up("<signal/join")
})
