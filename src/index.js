const express = require('express');
const userRoutes = require('#routes/user.routes');
const config = require('#config/index');
const connectDB = require('#loaders/mongoose');

async function startServer() {
  const app = express();

  await connectDB();
  app.use(express.json());

  // Route de test (Health Check)
  app.get('/status', (req, res) => {
    console.log("Health check requested");
    res.status(200).json({ message: "OK", timestamp: new Date() });
  });


  app.use('/api/users', userRoutes); 

  app.listen(config.port, () => {
    console.log(`
      ################################################
      🚀 Serveur prêt ! 
      👉 Health Status : http://localhost:${config.port}/status
      ################################################
    `);
  });
}

startServer();