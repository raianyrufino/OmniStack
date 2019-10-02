const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStore({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext); 

            cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
        }
    }),
};