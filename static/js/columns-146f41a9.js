import{t as m}from"./data-42f2c9d0.js";import{r as a,a5 as r,g7 as v,o as b,ar as u,G as C}from"./index-b9c76e4f.js";function S(){const o=a([]),t=a(!0),n=a("nohide"),f=a("default"),h=a(!1),s=a("right"),c=[{label:"日期",prop:"date",hide:()=>n.value==="hideDate"},{label:"姓名",prop:"name",hide:()=>n.value==="hideName"},{label:"地址",prop:"address",hide:()=>n.value==="hideAddress"}],l=r({pageSize:10,currentPage:1,pageSizes:[10,15,20],total:0,align:"right",background:!0,small:!1}),i=r({text:"正在加载第一页...",viewBox:"-10, -10, 50, 50",spinner:`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `});function g(e){l.small=e}function d(e){}function p(e){i.text=`正在加载第${e}页...`,t.value=!0,u(600).then(()=>{t.value=!1})}return v(()=>{l.align=s.value}),b(()=>{u(600).then(()=>{const e=[];Array.from({length:6}).forEach(()=>{e.push(C(m,!0))}),o.value=e.flat(1/0),l.total=o.value.length,t.value=!1})}),{loading:t,columns:c,dataList:o,hideVal:n,tableSize:f,pagination:l,loadingConfig:i,paginationAlign:s,paginationSmall:h,onChange:g,onSizeChange:d,onCurrentChange:p}}export{S as useColumns};
