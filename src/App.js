import React, { useState } from "react";

function App() {
  const [goals, setGoals] = useState([]);
  const [input, setInput] = useState("");
  const detectEnter = (e) => {
    if (e.key === 'Enter') {
      setGoal();
    }
  }
  const setGoal = () => {
    if (!input  || input.trim() === '') {
      return alert('Por favor, escribe un objetivo');
    }
    setGoals([...goals, input]);
    setInput('');
  }

  const inputChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  }

  const delGoal = (e) => {
    const newGoals = goals.filter((goal) => goal !== e.target.textContent);
    setGoals(newGoals);
  }

  return (
    <div className="app" style={styles.container} onKeyDown={detectEnter}>
      <h1 style={styles.title}>MI GOAL APP</h1> 
      <div className="add-goal" style={styles.addGoal}>
        <input value={input} onChange={inputChange} style={styles.input} type="text" placeholder="Escribir objetivo" />
        <button onClick={setGoal} style={styles.button}>Añadir objetivo</button>
      </div>
      <div className="goal-list">
        {goals.map((goal, index) => (
          <div onClick={delGoal} style={styles.goalList} key={index}>{goal}</div>
        ))}
      </div>
      <div className="goal-count">Total de objetivos: {goals.length}</div>
    </div>
  );
}

export default App;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  title: {
    color: "#333",
    fontSize: "30px",
    marginBottom: "20px",
    textAlign: "center",
  },
  addGoal: {
    display: "flex",
    width: "100%",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    marginRight: "10px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  goalList: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
  },
};