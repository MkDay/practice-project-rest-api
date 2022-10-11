const express = require('express');
const PORT = 3000;

const userRoutes = require('./routes/userRoutes');

const app = express();

// body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Homepage');
});

// user routes
app.use('/users', userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

