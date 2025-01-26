import express from 'express'
import products from './products.json' with {type: 'json'}
import cors from 'cors'
import fs from 'fs'
import bodyParser from 'body-parser'


const app = express()
const port = 8080


app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use('/assets', express.static('assets'))


app.get('/', (req,res)=> {
    return res.send("hellooooooo")
})



// Create --------------------------------------------------------------------
app.post("/additem", (req, res) => {
  const items = loadItems();
  const newItem = req.body;

  // Assign a unique ID to the new item
  const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
  newItem.id = newId;

  // Add new item to the list
  items.push(newItem);

  // Save to JSON file
  saveItems(items);

  res.status(201).json({
    message: "Product added successfully",
    newItem,
  });
});


// Read ------------------------------------------------------------------------
app.get('/data', (req,res)=> {
  return res.status(200).json(products)
})

app.get('/data/:id', (req,res)=> {
  const id = Number(req.params.id)
  const product = products.find((product)=> product.id == id )

  if (!product) {
    return res.status(404).send({ message: "User not found" });
  }

  return res.status(200).json(product)
})


// Delete -----------------------------------------------------------------------
// Load items from JSON file
const loadItems = () => {
  const data = fs.readFileSync('products.json');
  return JSON.parse(data);
};

// Save items to JSON file
const saveItems = (items) => {
  fs.writeFileSync('products.json', JSON.stringify(items, null, 2), 'utf-8');
};

app.delete('/data/:id', (req, res) => {
  const id = Number(req.params.id);
  let items = loadItems();

  // Filter out the item with the specified id
  const updatedItems = items.filter((item) => item.id !== id);

  if (items.length === updatedItems.length) {
    return res.status(404).json({ message: 'Item not found' });
  }

  // Save updated items back to JSON file
  saveItems(updatedItems);

  res.status(200).json({ message: 'Item deleted successfully' });
});



// Update --------------------------------------------------------------------
app.put('/data/:id', (req, res) => {
  const id = Number(req.params.id);
  const updatedData = req.body;

  let items = loadItems();
  const itemIndex = items.findIndex((item) => item.id === id);

  if (itemIndex === -1) {
    return res.status(404).json({ message: 'Item not found' });
  }

  // Update item
  items[itemIndex] = { ...items[itemIndex], ...updatedData };

  // Save updated items to file
  saveItems(items);

  res.status(200).json({
    message: 'Item updated successfully!',
    updatedItem: items[itemIndex],
  });
});



// pagination  ---------------------------------------------------------------------
app.get('/products', (req, res) => {
    const { page = 1, limit = products.length } = req.query;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
  
    const paginatedProducts = products.slice(startIndex, endIndex);
  
    res.json({
      currentPage: parseInt(page),
      totalItems: products.length,
      totalPages: Math.ceil(products.length / limit),
      products: paginatedProducts,
    });
  });




  

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
    
})