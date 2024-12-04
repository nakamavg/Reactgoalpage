# Goal List react

### Manejo del estado
- Importar useState de react
```jsx
  const [input, setInput] = useState("");
```
 - Tenemos un array con input y set input entonces 
 ```html
<input value={input} onChange={inputChange} style={styles.input} type="text" placeholder="Escribir objetivo" />

 ```
 - input le pasamos a la prop onChange la funcion inputChange
 que cada vez que escribamos un caracter o espacio llamara a la funcion donde seteamos el estado
 ```jsx
    setInput(e.target.value);
 ```

 - Pequeña correcion en el caso de que sea vacio mande alerta al usuario y añadir al div que contiene la app que detecte enter
 ```jsx
  const setGoal = () => {
    if (!input  || input.trim() === '') {
      return alert('Por favor, escribe un objetivo');
    }
    setGoals([...goals, input]);
    setInput('');
  }
 ```
 ```html
    <div className="app" style={styles.container} onKeyDown={detectEnter}>

 ```
 ```jsx
  const detectEnter = (e) => {
    if (e.key === 'Enter') {
      setGoal();
    }
  }
 ```