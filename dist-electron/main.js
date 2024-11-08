const { app: e, BrowserWindow: t } = require("electron"),
	o = require("node:path");
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";
function i() {
	const n = new t({
		width: 800,
		height: 600,
		webPreferences: { preload: o.join(__dirname, "preload.js") },
	});
	process.env.NODE_ENV,
		console.log(process.env.NODE_ENV, "enenenen"),
		n.webContents.openDevTools(),
		n.loadFile(o.join(__dirname, "./dist/index.html"));
}
e.whenReady().then(() => {
	i(),
		e.on("activate", () => {
			t.getAllWindows().length === 0 && i();
		});
});
e.on("window-all-closed", () => {
	process.platform !== "darwin" && e.quit();
});
