const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const APP_MESSAGE = process.env.APP_MESSAGE || "Default message";
const DEMO_SECRET = process.env.DEMO_SECRET;

app.get("/", (req, res) => {
  res.json({
    message: APP_MESSAGE,
    status: "running"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy"
  });
});

app.get("/ready", (req, res) => {
  res.json({
    status: "ready"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`APP_MESSAGE: ${APP_MESSAGE}`);
  console.log(`DEMO_SECRET loaded: ${Boolean(DEMO_SECRET)}`);
});