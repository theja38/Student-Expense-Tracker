export function formatCurrency(amount){ const num = Number(amount)||0; return num.toLocaleString('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}) }
export function formatDate(iso){ if(!iso) return ''; const d=new Date(iso); return d.toLocaleDateString('en-GB') }
