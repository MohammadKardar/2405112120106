import React, { useState } from "react";
import { useURL } from "../context/URLContext";
import generateShortcode from "../utils/generateShortcode";
import { validateShortcode } from "../utils/validators";

const URLForm = () => {
  const { addUrl, urls } = useURL();
  const [originalUrl, setOriginalUrl] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [validity, setValidity] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let shortcode = customCode.trim() || generateShortcode();

    if (urls[shortcode]) {
      alert("Shortcode already in use.");
      return;
    }

    if (customCode && !validateShortcode(customCode)) {
      alert("Custom code must be alphanumeric and 4-8 chars.");
      return;
    }

    addUrl(shortcode, originalUrl, parseInt(validity) || 30);
    setResult(`${window.location.origin}/${shortcode}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔗 URL Shortener</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter long URL"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          required
        /><br /><br />
        <input
          placeholder="Custom shortcode (optional)"
          value={customCode}
          onChange={(e) => setCustomCode(e.target.value)}
        /><br /><br />
        <input
          placeholder="Validity in minutes (default 30)"
          type="number"
          value={validity}
          onChange={(e) => setValidity(e.target.value)}
        /><br /><br />
        <button type="submit">Shorten</button>
      </form>
      {result && <p>✅ Short URL: <a href={result}>{result}</a></p>}
    </div>
  );

  <div style={{ backgroundColor: "#fff", padding: "20px", color: "#000" }}>
  <h2>URL Shortener</h2>
  ...
</div>
};




export default URLForm;
