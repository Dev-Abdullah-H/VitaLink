import{C as n}from"./auto-C08LIDt6.js";import{_ as c,o as i,a as p,b as g,c as u,p as h,h as _,e as s}from"./index-6Gl0jDgR.js";const r=o=>(h("data-v-7fd930f4"),o=o(),_(),o),m={class:"chart-container bg-gray-100 rounded-lg shadow-md mx-auto mt-8 py-8 px-4 lg:px-0"},b=r(()=>s("h1",{class:"text-2xl lg:text-3xl font-thin text-center mb-6 text-gray-800"}," Health Data Trends - Blood Report ",-1)),f=r(()=>s("canvas",{id:"goodCanvas1",class:"chart","aria-label":"Line chart for Health Data"},null,-1)),x=[b,f],B={__name:"Blood",setup(o){let e=[],a=[],l=JSON.parse(localStorage.getItem("userData"));i(async()=>{try{const t=await p.post("http://localhost:3000/test/get-test/blood",{email:l.email});e=t.data.values,a=t.data.dates,e=e.map(Number),d()}catch(t){console.error("Error fetching Blood sugar rate data:",t)}});const d=()=>{const t=document.getElementById("goodCanvas1");new n(t,{type:"line",data:{labels:a,datasets:[{label:"Blood sugar",data:e,borderColor:"#5cb85c",backgroundColor:"rgba(92, 184, 92, 0.2)",borderWidth:2,pointRadius:5,pointBackgroundColor:"#5cb85c",pointHoverRadius:7,pointHoverBorderColor:"#fff",pointHoverBackgroundColor:"#28a745"}]},options:{scales:{y:{beginAtZero:!1,suggestedMin:70,suggestedMax:250,ticks:{stepSize:10}},x:{ticks:{color:"#808b96"}}},legend:{labels:{fontColor:"#333",fontSize:"14px"}},plugins:{legend:{position:"bottom",labels:{padding:16}}}}})};return(t,v)=>(g(),u("div",m,x))}},k=c(B,[["__scopeId","data-v-7fd930f4"]]);export{k as default};