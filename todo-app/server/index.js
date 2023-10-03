const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models');
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const router = require('./routes');
app.use('/', router);

db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});
