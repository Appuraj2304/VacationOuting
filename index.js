const express = require("express");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const port = 5000;

// Connect to MySQL database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Appuraj@2304",
  database: "vacationouting",
});

// Check MySQL connection
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ... (Other routes remain the same)

// Booking Form page
app.get("/bookingform", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Bookingform.html"));
});

app.post("/bookingform", async (req, res) => {
  const { name, address, email, contact_no, indate, outdate } = req.body;

  try {
    // Assuming you have a User model or a table in your database
    const user = await db.query(
      "INSERT INTO users (name, address, email, contact_no, indate, outdate) VALUES (?, ?, ?, ?, ?, ?)",
      [name, address, email, contact_no, indate, outdate]
    );

    // You can also perform additional actions here if needed

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Booking failed. Please try again.");
  }
});

// Destination page
app.get("/goa", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/Destination/goa/goa.html"));
});

app.get("/maldives", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "/Destination/maldives/Maldives.html")
  );
});

app.get("/tajmahal", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "/Destination/tajmahal/tajmahal.html")
  );
});

// Packages page

app.get("/Pondichery", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "/Packages/Pondichery/Pondichery.html")
  );
});

app.get("/NarmadaRiver", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "/Packages/Narmadha River/Narmadha River.html"
    )
  );
});
app.get("/manali", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "/Packages/Manaali/Manaali.html")
  );
});

app.get("/shimla", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/Packages/Simla/Simla.html"));
});

app.get("/ooty", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/Packages/Ooty/Ooty.html"));
});

app.get("/munar", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/Packages/Munar/Munar.html"));
});

app.get("/bangalore", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "/Packages/Bengalur/Bengalur.html")
  );
});
app.get("/privacy&policy", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/footer/privacy index.html"));
});

app.get("/tearms&condition", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/footer/terms.html"));
});

app.get("/faq", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/footer/faq.html"));
});

// ... (Other routes remain the same)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
