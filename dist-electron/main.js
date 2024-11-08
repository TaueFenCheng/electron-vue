"use strict";
const { app, BrowserWindow } = require("electron");
const path = require("node:path");
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });
  process.env.NODE_ENV;
  console.log(process.env.NODE_ENV, "enenenen");
  mainWindow.webContents.openDevTools();
  mainWindow.loadFile(path.join(__dirname, "./dist/index.html"));
}
app.whenReady().then(() => {
  createWindow();
  app.on("activate", function() {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
app.on("window-all-closed", function() {
  if (process.platform !== "darwin") app.quit();
});
