import React, { createContext, useState, useContext } from "react";
import { logInfo } from "../utils/logger";

const URLContext = createContext();

export const URLProvider = ({ children }) => {
  const [urls, setUrls] = useState({}); // { shortcode: { originalUrl, expiryTime } }

  const addUrl = (shortcode, originalUrl, validity) => {
    const expiry = Date.now() + (validity || 30) * 60000; // in ms
    setUrls(prev => ({
      ...prev,
      [shortcode]: { originalUrl, expiry },
    }));
    logInfo(`URL added: ${shortcode} → ${originalUrl}, valid until ${new Date(expiry)}`);
  };

  const getUrl = shortcode => {
    const data = urls[shortcode];
    if (!data) return null;

    if (Date.now() > data.expiry) {
      logInfo(`URL expired: ${shortcode}`);
      return null;
    }

    logInfo(`Redirecting: ${shortcode} → ${data.originalUrl}`);
    return data.originalUrl;
  };

  return (
    <URLContext.Provider value={{ addUrl, getUrl, urls }}>
      {children}
    </URLContext.Provider>
  );
};

export const useURL = () => useContext(URLContext);
