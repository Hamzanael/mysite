const multer = require("multer");
const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/projectImages')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const storage = multer({storage: diskStorage})
module.exports = storage;