import Expense from '../models/Expense.js'

export const addExpense = async (req, res) => {
  try{
    const { title, amount, category, date, type } = req.body
    const exp = await Expense.create({ userId: req.userId, title, amount, category, date, type })
    res.json(exp)
  }catch(err){
    res.status(500).json({ error: err.message })
  }
}

export const getExpenses = async (req, res) => {
  try{
    const list = await Expense.find({ userId: req.userId }).sort({ date: -1 })
    res.json(list)
  }catch(err){
    res.status(500).json({ error: err.message })
  }
}

export const deleteExpense = async (req, res) => {
  try{
    const { id } = req.params
    await Expense.deleteOne({ _id: id, userId: req.userId })
    res.json({ success: true })
  }catch(err){
    res.status(500).json({ error: err.message })
  }
}
