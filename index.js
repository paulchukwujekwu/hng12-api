import express from 'express';
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const response = {
        email: "paulchukwu2001@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/yourusername/your-repo"
    };
    res.json(response);
});

app.listen(port, () => {
    console.log(`API is running on http://localhost:${port}`);
});
