import{r as i,G as p,ao as c,x as n,ap as u}from"./index-b9c76e4f.js";import{a as f}from"./data-42f2c9d0.js";import{m as h}from"./message-6a608e22.js";import{t as d}from"./index-6ed2591a.js";function D(){const a=i(p(f,!0).splice(0,4)),t=[{label:"ID",prop:"id"},{label:"姓名",prop:"name"},{label:"日期",prop:"date"},{label:"echarts图表",slot:"echart"}],{isDark:s}=c(),r=n(()=>s.value?"dark":"light");return a.value.forEach((b,e)=>{const{setOptions:o}=u(d(`PieChartRef${e}`),{theme:r});o({tooltip:{trigger:"item",confine:!0},series:[{name:"Github信息",type:"pie",data:[{value:1067,name:"watchers"},{value:4037,name:"star"},{value:859,name:"forks"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},{name:"click",callback:({data:{name:l,value:m}})=>{h(`您点击了第 ${e+1} 行，图表标题为${l}，图表数据为：${m}`,{type:"success"})}})}),{columns:t,dataList:a}}export{D as useColumns};
