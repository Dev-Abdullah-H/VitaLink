import{_ as C,r as D,i as k,o as V,b as s,c as o,d as N,e,q as i,F as m,s as f,f as $,t as c,w,v as x,x as R,a as v,p as S,h as U}from"./index-6Gl0jDgR.js";import{_ as F}from"./Header-CpxUUns-.js";const n=h=>(S("data-v-4a1e6be1"),h=h(),U(),h),I={class:"container mx-auto px-4 py-8"},B=n(()=>e("h1",{class:"text-3xl font-thin text-center mb-8"},"Your Test Results",-1)),M={class:"grid grid-cols-1 md:grid-cols-2 gap-8"},q={class:"rounded-lg shadow-md px-6 py-8 bg-gray-100"},j=n(()=>e("h2",{class:"text-lg font-medium mb-4"},"Heart Health Tests",-1)),E={class:"test-list"},H={key:0,class:"text-center border shadow-lg p-4 rounded-lg mb-4 bg-slate-50"},z=n(()=>e("h1",null,"No Test Results Found",-1)),A=[z],J={class:"test-item"},L={class:"test-label"},O=["onClick"],Y=["onClick"],G={key:0,class:"test-date"},K={class:"rounded-lg shadow-md px-6 py-8 bg-gray-200"},P=n(()=>e("h2",{class:"text-lg font-medium mb-4"},"Urine Tests",-1)),Q={class:"test-list"},W={key:0,class:"text-center border shadow-lg p-4 rounded-lg mb-4 bg-slate-50"},X=n(()=>e("h1",null,"No Test Results Found",-1)),Z=[X],ee={class:"test-item"},te={class:"test-label"},se=["onClick"],oe=["onClick"],ae={key:0,class:"test-date"},le={class:"rounded-lg shadow-md px-6 py-8 bg-gray-100"},de=n(()=>e("h2",{class:"text-lg font-medium mb-4"},"Blood Sugar Tests",-1)),ne={class:"test-list"},re={key:0,class:"text-center border shadow-lg p-4 rounded-lg mb-4 bg-slate-50"},ie=n(()=>e("h1",null,"No Test Results Found",-1)),ce=[ie],ue={class:"test-item"},_e={class:"test-label"},he=["onClick"],pe=["onClick"],be={key:0,class:"test-date"},ge={class:"rounded-lg shadow-md px-6 py-8 bg-gray-100"},me=n(()=>e("h2",{class:"text-lg font-medium mb-4"},"BMI Tests",-1)),fe={class:"test-list"},ve={key:0,class:"text-center border shadow-lg p-4 rounded-lg mb-4 bg-slate-50"},ye=n(()=>e("h1",null,"No Test Results Found",-1)),ke=[ye],we={class:"test-item"},xe={class:"test-label"},Te=["onClick"],Ce=["onClick"],De={key:0,class:"test-date"},Ve={key:0,class:"fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50"},Ne={class:"modal-card rounded-lg bg-white p-8 shadow-lg w-96"},$e={class:"text-lg font-medium mb-4"},Re={class:"mb-4"},Se=n(()=>e("label",{for:"testValue",class:"block text-gray-700 mb-2"},"Test Value:",-1)),Ue={class:"mb-4"},Fe=n(()=>e("label",{for:"testValue",class:"block text-gray-700 mb-2"},"Test Date:",-1)),Ie={class:"flex justify-end"},Be={__name:"Tests",setup(h){let y=JSON.parse(localStorage.getItem("userData")),u=D(!1);const l=k({heartData:"",urineData:"",bloodData:"",bmiData:""}),r=k({_id:"",email:y.email,testName:"",testVal:"",date:""}),p=async(a,d)=>{u.value=!u.value,r._id=d,r.testName=a},T=async()=>{try{(await v.put(`http://localhost:3000/test/update-test/${r._id}`,r)).data?(alert("Test updated successfully"),u.value=!u.value,g()):alert("Test updation failed"),g()}catch(a){console.error(a)}},b=async a=>{try{(await v.delete(`http://localhost:3000/test/delete-test/${a}`)).data?alert("Test deleted successfully"):alert("Test deletion failed"),g()}catch(d){console.error(d)}},g=async()=>{try{const a=await v.post("http://localhost:3000/test/get-test-all",{email:y.email});a.data&&(l.heartData=a.data.heartRates,l.urineData=a.data.urineTests,l.bloodData=a.data.bloodTests,l.bmiData=a.data.bmiTests)}catch(a){console.error(a)}};return V(async()=>{g()}),(a,d)=>(s(),o("div",I,[N(F,{class:"mb-5"}),B,e("div",M,[e("section",q,[j,e("ul",E,[l.heartData.length==0?(s(),o("div",H,A)):i("",!0),(s(!0),o(m,null,f(l.heartData,t=>(s(),o("li",{class:"border shadow-lg p-4 rounded-lg mb-4 bg-slate-50",key:t._id},[e("div",J,[e("span",L,c(t.testVal),1),e("span",null,[e("i",{onClick:_=>b(t._id),class:"fa-sharp fa-solid fa-trash hover:border hover:p-4 cursor-pointer hover:bg-red-600 transition-all rounded-full"},null,8,O),e("i",{onClick:_=>p(t.testName,t._id),class:"fa-solid fa-arrows-rotate hover:border hover:p-4 cursor-pointer hover:bg-yellow-400 transition-all rounded-full ml-5"},null,8,Y)]),t.date?(s(),o("span",G,c(t.date),1)):i("",!0)])]))),128))])]),e("section",K,[P,e("ul",Q,[l.urineData.length==0?(s(),o("div",W,Z)):i("",!0),(s(!0),o(m,null,f(l.urineData,t=>(s(),o("li",{class:"border shadow-lg p-4 rounded-lg mb-4 bg-slate-50",key:t._id},[e("div",ee,[e("span",te,c(t.testVal),1),e("span",null,[e("i",{onClick:_=>b(t._id),class:"fa-sharp fa-solid fa-trash hover:border hover:p-4 cursor-pointer hover:bg-red-600 transition-all rounded-full"},null,8,se),e("i",{onClick:_=>p(t.testName,t._id),class:"fa-solid fa-arrows-rotate hover:border hover:p-4 cursor-pointer hover:bg-yellow-400 transition-all rounded-full ml-5"},null,8,oe)]),t.date?(s(),o("span",ae,c(t.date),1)):i("",!0)])]))),128))])]),e("section",le,[de,e("ul",ne,[l.bloodData.length==0?(s(),o("div",re,ce)):i("",!0),(s(!0),o(m,null,f(l.bloodData,t=>(s(),o("li",{class:"border shadow-lg p-4 rounded-lg mb-4 bg-slate-50",key:t._id},[e("div",ue,[e("span",_e,c(t.testVal),1),e("span",null,[e("i",{onClick:_=>b(t._id),class:"fa-sharp fa-solid fa-trash hover:border hover:p-4 cursor-pointer hover:bg-red-600 transition-all rounded-full"},null,8,he),e("i",{onClick:_=>p(t.testName,t._id),class:"fa-solid fa-arrows-rotate hover:border hover:p-4 cursor-pointer hover:bg-yellow-400 transition-all rounded-full ml-5"},null,8,pe)]),t.date?(s(),o("span",be,c(t.date),1)):i("",!0)])]))),128))])]),e("section",ge,[me,e("ul",fe,[l.bmiData.length==0?(s(),o("div",ve,ke)):i("",!0),(s(!0),o(m,null,f(l.bmiData,t=>(s(),o("li",{class:"border shadow-lg p-4 rounded-lg mb-4 bg-slate-50",key:t._id},[e("div",we,[e("span",xe,c(t.testVal),1),e("span",null,[e("span",null,[e("i",{onClick:_=>b(t._id),class:"fa-sharp fa-solid fa-trash hover:border hover:p-4 cursor-pointer hover:bg-red-600 transition-all rounded-full"},null,8,Te),e("i",{onClick:_=>p(t.testName,t._id),class:"fa-solid fa-arrows-rotate hover:border hover:p-4 cursor-pointer hover:bg-yellow-400 transition-all rounded-full ml-5"},null,8,Ce)])]),t.date?(s(),o("span",De,c(t.date),1)):i("",!0)])]))),128))])]),$(u)?(s(),o("div",Ve,[e("div",Ne,[e("h2",$e," Update Test Result : "+c(r.testName.toUpperCase()),1),e("div",null,[e("div",Re,[Se,w(e("input",{type:"text",id:"testValue","onUpdate:modelValue":d[0]||(d[0]=t=>r.testVal=t),class:"w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600",required:""},null,512),[[x,r.testVal]])]),e("div",Ue,[Fe,w(e("input",{type:"date",id:"testValue","onUpdate:modelValue":d[1]||(d[1]=t=>r.date=t),class:"w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600",required:""},null,512),[[x,r.date]])]),e("div",Ie,[e("button",{type:"button",onClick:d[2]||(d[2]=t=>R(u)?u.value=!1:u=!1),class:"btn btn-secondary mr-8"}," Cancel "),e("button",{onClick:T,class:"btn btn-primary"}," Update Test ")])])])])):i("",!0)])]))}},je=C(Be,[["__scopeId","data-v-4a1e6be1"]]);export{je as default};