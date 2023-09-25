const express = require('express');
const app = express()
const port = 3000;

const data = [
    { id: 1, title: 'First blog', content: 'Content of the first post.' },
    { id: 2, title: 'Second blog', content: 'Content of the second post.' },
    { id: 3, title: 'Third blog', content: 'Content of the third post.' },
  ];
  app.use(express.json());

  //errors
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
  });

  //by posts
app.get('/posts', (req, res) => {
    res.json(data);
  });

//by id
app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = data.find((item) => item.id === postId);
      res.json(post);
    
  });

  //create new post
  app.post('/posts', (req, res) => {
    const newPost = req.body;
    newPost.id = data.length + 1;
    data.push(newPost);
    res.status(201).json(newPost);
  });

  //Update
  app.put('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const updatedPost = req.body;
  
    const index = data.findIndex((item) => item.id === postId);
  
      data[index] = { ...data[index], ...updatedPost };
      res.json(data[index]);
  });

  //delete
  app.delete('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
  
    const index = data.findIndex((item) => item.id === postId);
  
      data.splice(index, 1);
      res.status(204).send();
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });