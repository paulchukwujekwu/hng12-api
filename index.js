import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    const response = {
        email: "paulchukwu2001@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/paulchukwujekwu/hng12-api"
    };
    res.json(response);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
