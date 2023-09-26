const express = require('express');
const router = require('./router.js')
const app = express();
const port = 3000;

// const router = express.Router(); 

app.use(express.json()); 

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});