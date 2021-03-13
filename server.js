const port = process.env.PORT || 3000,
    express = require("express"),
    app = express(),
    path = require("path");

app.use("/", express.static(path.resolve(__dirname, "dist")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.listen(port, () => console.log("Vanilla is running on port ::: " + port));
