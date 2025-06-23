export const logInfo = (message) => {
  const timestamp = new Date().toISOString();
  const entry = `[${timestamp}] [INFO] ${message}`;
  
  // Store logs to localStorage (or send to server)
  let logs = JSON.parse(localStorage.getItem("logs") || "[]");
  logs.push(entry);
  localStorage.setItem("logs", JSON.stringify(logs));
};
