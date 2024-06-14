const controller = require('./controller/layoutController');
const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.get('/api/layout', controller.GetLayoutData);
app.put('/api/layout/update/:lay_id', controller.UpdateLayout);

app.listen(port , () => {
    console.log(`Server running ${port}`);
});
