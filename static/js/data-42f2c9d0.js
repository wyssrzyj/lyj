import{gB as r,G as t}from"./index-b9c76e4f.js";const s=r(new Date).format("YYYY-MM-DD"),o=[{date:s,name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:s,name:"Jack",address:"No. 189, Grove St, Los Angeles"},{date:s,name:"Dick",address:"No. 189, Grove St, Los Angeles"},{date:s,name:"Harry",address:"No. 189, Grove St, Los Angeles"},{date:s,name:"Sam",address:"No. 189, Grove St, Los Angeles"},{date:s,name:"Lucy",address:"No. 189, Grove St, Los Angeles"},{date:s,name:"Mary",address:"No. 189, Grove St, Los Angeles"},{date:s,name:"Mike",address:"No. 189, Grove St, Los Angeles"}];t(o,!0).map(e=>Object.assign(e,{state:"California",city:"Los Angeles","post-code":"CA 90036"}));t(o,!0).map((e,a)=>Object.assign(e,{image:`https://pure-admin.github.io/pure-admin-table/imgs/${a+1}.jpg`}));t(o,!0).map((e,a)=>{delete e.date,Object.assign(e,{date:`${r(new Date).format("YYYY-MM")}-${a+1}`})});const n=t(o,!0).map((e,a)=>(delete e.address,delete e.date,Object.assign({id:a+1,date:`${r(new Date).format("YYYY-MM")}-${a+1}`},e))),m=t(o,!0).map((e,a)=>(delete e.date,Object.assign({id:a+1,date:`${r(new Date).format("YYYY-MM")}-${a+1}`},e)));export{n as a,m as b,o as t};
