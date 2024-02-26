import express from 'express';

const app = express();

const PORT = 3300;

app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`);
});