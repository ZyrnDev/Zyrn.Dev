import formidable from 'formidable';

const KILOBYTE = 1024;
const MEGABYTE = KILOBYTE * 1024;
const GIGABYTE = MEGABYTE * 1024;

export const config = {
    api: {
        bodyParser: false,
    },
};

interface Form extends formidable {
    uploadDir?: string,
    maxFileSize?: number,
    keepExtensions?: boolean,
    hash?: string | 'sha1' | 'md5' | 'sha256' | null,
}

export default async (req, res) => {
    const form: Form  = new formidable.IncomingForm();
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
            const iterable_files = <formidable.File[]> Object.values(files);
            for (const file of iterable_files) {
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