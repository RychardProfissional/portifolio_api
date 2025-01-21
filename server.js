require('dotenv').config();

const app = require("./app");
const db = require('./models');
const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await db.sequelize.sync();
    console.log("Database synced successfully");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error syncing database:", error);
  }
};

startServer();

