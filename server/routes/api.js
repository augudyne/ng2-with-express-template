const express = require('express');
const multer = require('multer');
const fs = require('fs');
const upload = multer({ dest: 'uploads/' });


const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/',upload.single('file'), (req, res) => {
    // STUB: Single file upload handling
    // fs.readFile(req.file.path, function (err, data) {})

});

module.exports = router;
