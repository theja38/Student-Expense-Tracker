import React from 'react'
import CategoryBadge from './CategoryBadge'
import { formatCurrency, formatDate } from '../utils/format'
export default function TransactionTable({ list = [], onDelete }){ if(!Array.isArray(list)) list = []
  return (<div style={{overflowX:'auto'}}><table><thead><tr><th>Date</th><th>Title</th><th>Category</th><th>Amount</th><th>Type</th><th>Action</th></tr></thead><tbody>{list.length===0 && <tr><td colSpan="6" style={{padding:16,color:'#6b7280'}}>No transactions yet</td></tr>}{list.map((t,i)=>(<tr key={i}><td>{formatDate(t.date)}</td><td>{t.title}</td><td><CategoryBadge category={t.category} /></td><td>{formatCurrency(t.amount)}</td><td className={t.type==='income'?'income':'expense'}>{t.type}</td><td>{onDelete ? <button className="btn small" onClick={()=>onDelete(i)}>Delete</button> : null}</td></tr>))}</tbody></table></div>)}
