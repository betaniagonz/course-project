import { diskStorage } from "multer";

export const storage = diskStorage({
    destination: `./tmp`,
    filename: (req, file, cb) => {
        const extension = file.originalname.split('.').pop();
        const filename = `${Date.now()}.${extension}`; // se genera un nombre basado en la fecha formato unix
        cb(null, filename);
    },
})