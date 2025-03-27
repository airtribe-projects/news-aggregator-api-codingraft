const axios = require("axios");
const NodeCache = require("node-cache"); 
const cache = new NodeCache();

const fetchNews = async (req, res) => {
  try {
    if (!req.user.preferences) {
      return res.status(400).json({ message: "User preferences not found" });
    }

    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ message: "News API Key is missing" });
    }

    const categories = req.user.preferences.categories || ["general"];
    const query = categories.join(" OR ");
    const cacheKey = `news_${query}`;

    if (cache.has(cacheKey)) {
      console.log("Serving from cache:", cacheKey);
      return res.status(200).json({ news: cache.get(cacheKey) });
    }

    const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=en&country=us&max=10&apikey=${apiKey}`;
    console.log("Fetching news from API:", url);

    const response = await axios.get(url);

    if (!response.data || !response.data.articles || response.data.articles.length === 0) {
      return res.status(400).json({ message: "News not found" });
    }

    // Store articles only (not full response object) in cache
    cache.set(cacheKey, response.data.articles);

    return res.status(200).json({ news: response.data.articles });
  } catch (error) {
    console.error("Error in fetchNews controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { fetchNews };
