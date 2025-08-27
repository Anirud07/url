import React, { useState } from "react";
import axios from "axios";

function Shortener() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://urlshortener-pbdh.onrender.com/api/url/shorten", {
        longUrl,
      });
      setShortUrl(res.data.shortUrl);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">
          🔗 URL Shortener
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="url"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Enter long URL"
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Shorten
          </button>
        </form>

        {shortUrl && (
          <div className="mt-6">
            <p className="text-gray-700 font-medium">Shortened URL:</p>
            <a
              href={shortUrl}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 font-semibold underline break-all"
            >
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shortener;
