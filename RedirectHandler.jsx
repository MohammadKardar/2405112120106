import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useURL } from "../context/URLContext";

const RedirectHandler = () => {
  const { shortcode } = useParams();
  const { getUrl } = useURL();

  useEffect(() => {
    const longUrl = getUrl(shortcode);
    if (longUrl) {
      window.location.href = longUrl;
    } else {
      alert("This URL has expired or does not exist.");
    }
  }, [shortcode, getUrl]);

  return <p>Redirecting...</p>;
};

export default RedirectHandler;
