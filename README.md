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