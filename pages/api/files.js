import formidable from 'formidable';

const KILOBYTE = 1024;
const MEGABYTE = KILOBYTE * 1024;
const GIGABYTE = MEGABYTE * 1024;

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async (req, res) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = './public/uploads/';
    form.maxFileSize = 5 * GIGABYTE;
    form.keepExtensions = true;
    form.hash = 'sha1';

    form.on('fileBegin', (name, file) => {
        if (file.name) {
            file.path = form.uploadDir + file.name;
        }
    });

    form.parse(req, (err, fields, files) => {
        // console.log(err, fields, files);
        if (err) {
            res.status(500).json({ error: err });
        } else {
            let fileArr = [];
            for (const file of Object.values(files)) {
                fileArr.push({
                    name: file.name,
                    size: file.size,
                    hash: file.hash
                });
            }
            res.status(200).json({file: fileArr});
        }
    });
};