const express = require('express'); 
const app = express(); 
const port = 3000; 

app.use(express.json()); 

//dado em memoria (para fins de exemplo)
let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
]; 

// metodo GET para listar todos os itens 
app.get('/items', (req, res) => {
    res.json(items)
})

// metodo GET para obter um item especifico pelo ID 
app.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10); 
    const item = items.find(item => item.id === id); 
    if (item) {
        res.json(item); 
    } else {
        res.status(404).send('Item nao encontrado'); 
    }
}); 

// metodo POST para criar um novo item 
app.post('/items', (req, res) => {
    const newItem = {
        id: items.length + 1, 
        name: req.body.name
    }; 
    items.push(newItem); 
    res.status(201).json(newItem); 
}); 

// metodo DELETE para remover um item pelo ID 
app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10); 
    const itemIndex = items.findIndex(item => item.id === id); 
    if (itemIndex !== -1) {
        items.slice(itemIndex, 1); 
        res.status(204).send(); 
    } else {
        res.status(404).send('Item nao encontrado'); 
    }
}); 


// Iniciando o servidor 
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`); 
})