import{_ as D}from"./Header-CpxUUns-.js";import{_ as B,u as N,r as o,o as k,a as _,b as $,c as S,d as I,e as t,n as x,f as a,t as f,g as C,p as V,h as j}from"./index-6Gl0jDgR.js";const H="/assets/heart-jyP9EDvk.png",M="/assets/bladder--e0fd4Sc.png",E="/assets/blood-D1QGFF4W.png",F="/assets/bmi-FIGnatj6.png",w=c=>(V("data-v-391320db"),c=c(),j(),c),O={class:"container mx-auto px-4 py-8"},P={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6"},R={class:"data-section cursor-pointer rounded-lg shadow-md bg-gradient-to-b from-white to-gray-100 hover:shadow-lg"},T={class:"text-center px-4 py-4"},G=w(()=>t("h2",{class:"text-2xl font-bold text-gray-800"},"Heart Rate",-1)),U={class:"text-lg font-semibold text-blue-500 mb-4"},z={class:"text-4xl"},J={class:"data-section cursor-pointer rounded-lg shadow-md bg-gradient-to-b from-white to-gray-100 hover:shadow-lg"},L={class:"text-center px-4 py-4"},Q=w(()=>t("h2",{class:"text-2xl font-bold text-gray-800"},"Urine Output",-1)),W={class:"text-lg font-semibold text-blue-500 mb-4"},q={class:"data-section cursor-pointer rounded-lg shadow-md bg-gradient-to-b from-white to-gray-100 hover:shadow-lg"},A={class:"text-center px-4 py-4"},K=w(()=>t("h2",{class:"text-2xl font-bold text-gray-800"},"Blood Sugar",-1)),X={class:"text-lg font-semibold text-blue-500 mb-4"},Y={class:"text-4xl"},Z={class:"data-section cursor-pointer rounded-lg shadow-md bg-gradient-to-b from-white to-gray-100 hover:shadow-lg"},tt={class:"text-center px-4 py-4"},et=w(()=>t("h2",{class:"text-2xl font-bold text-gray-800"},"BMI",-1)),st={class:"text-lg font-semibold text-blue-500 mb-4"},ot={class:"text-4xl"},at={__name:"Home",setup(c){const y=N();let l=o(""),r=o(""),n=o(""),i=o(""),u=o(""),m=o(""),p=o(""),b=o(""),v=JSON.parse(localStorage.getItem("userData"));k(async()=>{try{let e=(await _.post("http://localhost:3000/test/get-test/heart",{email:v.email})).data.values.map(Number);l.value=e.pop(),l.value<=45?u.value="yellow":l.value>=55?u.value="red":l.value&&(u.value="green"),l.value||(l.value="--")}catch(s){console.error(s)}try{let e=(await _.post("http://localhost:3000/test/get-test/blood",{email:v.email})).data.values.map(Number);r.value=e.pop(),r.value<=70?m.value="yellow":r.value>=240?m.value="red":r.value&&(m.value="green"),r.value||(r.value="--")}catch(s){console.error(s)}try{let e=(await _.post("http://localhost:3000/test/get-test/urine",{email:v.email})).data.values.map(Number);n.value=e.pop(),n.value<7?p.value="yellow":n.value>=7.5?p.value="red":n.value&&(p.value="green"),n.value||(n.value="--")}catch(s){console.error(s)}try{let e=(await _.post("http://localhost:3000/test/get-test/bmi",{email:v.email})).data.values.map(Number);i.value=e.pop(),i.value<18.5?b.value="yellow":i.value>=25?b.value="red":i.value&&(b.value="green"),i.value||(i.value="--")}catch(s){console.error(s)}});const g=s=>{y.push(`/home/${s}`)},h=s=>{y.push(`/home/${s}-detail`)};return(s,e)=>($(),S("div",null,[I(D,{class:"mb-10"}),t("div",O,[t("div",P,[t("div",R,[t("img",{src:H,alt:"Heart Rate",class:x(["mx-auto mb-4 w-24 h-24 object-cover rounded-full border-4 p-2",a(u)])},null,2),t("div",T,[G,t("p",U,[t("span",z,f(a(l)),1),C(" BPM ")]),t("button",{onClick:e[0]||(e[0]=d=>g("heart")),class:"btn btn-primary mt-2 mr-2"}," View Details "),t("button",{onClick:e[1]||(e[1]=d=>h("heart")),class:"btn btn-primary mt-2"}," New test ")])]),t("div",J,[t("img",{src:M,alt:"Urine Output",class:x(["mx-auto mb-4 w-24 h-24 object-cover rounded-full border-4 p-2",a(p)])},null,2),t("div",L,[Q,t("p",W,f(a(n))+" PH ",1),t("button",{onClick:e[2]||(e[2]=d=>g("urine")),class:"btn btn-primary mt-2 mr-2"}," View Details "),t("button",{onClick:e[3]||(e[3]=d=>h("urine")),class:"btn btn-primary mt-2"}," New test ")])]),t("div",q,[t("img",{src:E,alt:"Blood Sugar",class:x(["mx-auto mb-4 w-24 h-24 object-cover rounded-full border-4 p-2",a(m)])},null,2),t("div",A,[K,t("p",X,[t("span",Y,f(a(r)),1),C(" mg/dL ")]),t("button",{onClick:e[4]||(e[4]=d=>g("blood")),class:"btn btn-primary mt-2 mr-2"}," View Details "),t("button",{onClick:e[5]||(e[5]=d=>h("blood")),class:"btn btn-primary mt-2"}," New test ")])]),t("div",Z,[t("img",{src:F,alt:"BMI",class:x(["mx-auto mb-4 w-24 h-24 object-cover rounded-full border-4 p-2",a(b)])},null,2),t("div",tt,[et,t("p",st,[t("span",ot,f(a(i)),1)]),t("button",{onClick:e[6]||(e[6]=d=>g("bmi")),class:"btn btn-primary mt-2 mr-2"}," View Details "),t("button",{onClick:e[7]||(e[7]=d=>h("bmi")),class:"btn btn-primary mt-2"}," New test ")])])])])]))}},nt=B(at,[["__scopeId","data-v-391320db"]]);export{nt as default};
