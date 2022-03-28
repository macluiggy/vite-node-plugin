import express from 'express';
const app = express();

// your beautiful code...

app.get('/', (req, res) => {
  res.send('Hello World!'); 
})

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

export const viteNodeApp = app; 