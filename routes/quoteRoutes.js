const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/quotes.json");

// Utility to load all quotes
function loadQuotes() {
  return JSON.parse(fs.readFileSync(filePath));
}

// Utility to save quotes
function saveQuotes(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

/*
  Routes:
  - GET /quotes
  - GET /quotes/random
  - GET /quotes/:id
  - POST /quotes
  - PUT /quotes/:id
  - DELETE /quotes/:id
*/

// GET all quotes
router.get("/quotes", (req, res) => {
  const quotes = loadQuotes();
  res.json(quotes);
});

// GET random quote
router.get("/quotes/random", (req, res) => {
  const quotes = loadQuotes();
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(randomQuote);
});

// GET quote by ID
router.get("/quotes/:id", (req, res) => {
  const id = Number(req.params.id);
  const quotes = loadQuotes();
  const quote = quotes.find((q) => q.id === id);
  if (!quote) return res.status(404).json({ error: "Quote not found" });
  res.json(quote);
});

// POST new quote
router.post("/quotes", (req, res) => {
  const quotes = loadQuotes();
  const { author, text } = req.body;

  if (!author || !text) {
    return res
      .status(400)
      .json({ error: "Both 'author' and 'text' are required" });
  }

  const newQuote = {
    id: quotes.length ? quotes[quotes.length - 1].id + 1 : 1,
    author,
    text,
  };

  quotes.push(newQuote);
  saveQuotes(quotes);
  res.status(201).json({ message: "Quote added", quote: newQuote });
});

// PUT update quote by ID
router.put("/quotes/:id", (req, res) => {
  const id = Number(req.params.id);
  const quotes = loadQuotes();
  const quote = quotes.find((q) => q.id === id);

  if (!quote) return res.status(404).json({ error: "Quote not found" });

  if (req.body.author) quote.author = req.body.author;
  if (req.body.text) quote.text = req.body.text;

  saveQuotes(quotes);
  res.json(quote);
});

// DELETE quote by ID
router.delete("/quotes/:id", (req, res) => {
  const id = Number(req.params.id);
  const quotes = loadQuotes();
  const quote = quotes.find((q) => q.id === id);

  if (!quote)
    return res
      .status(404)
      .json({ error: `Quote with id ${id} not found` });

  const newQuotes = quotes.filter((q) => q.id !== id);
  saveQuotes(newQuotes);

  res.json({
    message: `Quote with id ${id} deleted successfully`,
    deleted: quote,
  });
});

module.exports = router;
