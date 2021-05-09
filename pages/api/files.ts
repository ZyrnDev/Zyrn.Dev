import type { NextApiHandler } from 'next'
import formidable from 'formidable';

const KILOBYTE = 1024;
const MEGABYTE = KILOBYTE * 1024;
const GIGABYTE = MEGABYTE * 1024;

export const config = {
    api: {
        bodyParser: false,
    },
};

class Form extends formidable.IncomingForm {
    uploadDir?: string;
    maxFileSize?: number;
    keepExtensions?: boolean;
    hash?: string | 'sha1' | 'md5' | 'sha256' | null;

    constructor() {
        super();
        this.uploadDir = './public/uploads/';
        this.maxFileSize = 5 * GIGABYTE;
        this.keepExtensions = true;
        this.hash = 'sha1';

        const onFileBegin = (_name: string, file: formidable.File) => {
            if (file.name) {
                file.path = this.uploadDir + file.name;
            }
        }
        this.on('fileBegin', onFileBegin.bind(this));
    }

    
}

const handler: NextApiHandler = async (req, res) => {
    const form = new Form();

    form.parse(req, (err, _fields, files) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            const fileArr = [];
            const iterable_files = <formidable.File[]> Object.values(files);
            for (const file of iterable_files) {
                fileArr.push({ name: file.name, size: file.size, hash: file.hash });
            }
            res.status(200).json({file: fileArr});
        }
    });
};

export default handler;