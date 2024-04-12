import{C as l}from"./auto-C08LIDt6.js";import{_ as d,o as i,a as p,b as g,c as m,p as h,h as u,e as s}from"./index-6Gl0jDgR.js";const r=e=>(h("data-v-39692ac3"),e=e(),u(),e),_={class:"chart-container bg-gray-100 rounded-lg shadow-md mx-auto mt-8 py-8 px-4 lg:px-0"},b=r(()=>s("h1",{class:"text-2xl lg:text-3xl font-thin text-center mb-6 text-gray-800"}," Health Data Trends - Bmi Report ",-1)),x=r(()=>s("canvas",{id:"goodCanvas1",class:"chart","aria-label":"Line chart for Health Data"},null,-1)),f=[b,x],B={__name:"Bmi",setup(e){let a=[],o=[],c=JSON.parse(localStorage.getItem("userData"));i(async()=>{try{const t=await p.post("http://localhost:3000/test/get-test/bmi",{email:c.email});a=t.data.values,o=t.data.dates,a=a.map(Number),n()}catch(t){console.error("Error fetching Bmi data:",t)}});const n=()=>{const t=document.getElementById("goodCanvas1");new l(t,{type:"line",data:{labels:o,datasets:[{label:"Bmi",data:a,borderColor:"#5cb85c",backgroundColor:"rgba(92, 184, 92, 0.2)",borderWidth:2,pointRadius:5,pointBackgroundColor:"#5cb85c",pointHoverRadius:7,pointHoverBorderColor:"#fff",pointHoverBackgroundColor:"#28a745"}]},options:{scales:{y:{beginAtZero:!1,suggestedMin:15,suggestedMax:35,ticks:{stepSize:5}},x:{ticks:{color:"#808b96"}}},legend:{labels:{fontColor:"#333",fontSize:"14px"}},plugins:{legend:{position:"bottom",labels:{padding:16}}}}})};return(t,v)=>(g(),m("div",_,f))}},k=d(B,[["__scopeId","data-v-39692ac3"]]);export{k as default};