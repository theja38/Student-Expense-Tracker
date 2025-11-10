import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import categories from '../utils/categories'
const COLORS=['#8884d8','#82ca9d','#ffc658','#ff8042','#8dd1e1','#a4de6c','#d0ed57','#8a89a6']
export default function PieChartComponent({data=[]}){ const pieData = categories.map((c,i)=>{ const value = (data||[]).filter(t=>t.type==='expense' && t.category===c).reduce((s,x)=>s+Number(x.amount||0),0); return {name:c, value} }).filter(d=>d.value>0); if(pieData.length===0) return <div style={{padding:20,color:'#6b7280'}}>No expense data yet</div>; return (<div style={{height:220}}><ResponsiveContainer><PieChart><Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80} label>{pieData.map((_,i)=><Cell key={i} fill={COLORS[i%COLORS.length]} />)}</Pie><Tooltip /></PieChart></ResponsiveContainer></div>) }
