const resume = (app) => {
    app.get("/HamzaResume.pdf", (req, res) => res.download("public/CV/Hamza's Resume.pdf"));
};
module.exports = resume