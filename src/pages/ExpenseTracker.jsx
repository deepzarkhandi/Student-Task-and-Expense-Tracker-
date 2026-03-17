import { useState, useEffect } from "react";
import api from "../api";
import "./ExpenseTracker.css"; // Ensure your CSS file is named exactly this

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const load = async () => {
    const res = await api.get("/expenses");
    setExpenses(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const add = async () => {
    if (!title || !amount) return;
    await api.post("/expenses", { title, amount });
    setTitle("");
    setAmount("");
    load();
  };

  const remove = async (id) => {
    await api.delete("/expenses/" + id);
    load();
  };

  // Calculate total for a "Unique" feature
  const total = expenses.reduce((sum, item) => sum + Number(item.amount), 0);

  return (
    <div className="expense-container">
      <div className="tracker-card">
        <h1 className="tracker-title">Expense Tracker</h1>

        {/* Total Display */}
        <div className="total-display">
          <p>Total Spent</p>
          <h2>₹{total.toLocaleString()}</h2>
        </div>

        <div className="input-flex">
          <input
            placeholder="What for?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="custom-input"
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="custom-input"
          />
        </div>

        <button onClick={add} className="add-btn">
          Add Transaction
        </button>

        <ul className="expense-list">
          {expenses.map((e) => (
            <li key={e._id} className="expense-item">
              <div className="expense-info">
                <span className="exp-title">{e.title}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span className="exp-amount">₹{e.amount}</span>
                <button 
                  onClick={() => remove(e._id)} 
                  className="delete-icon-btn"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}