import multer from 'multer';
import { Request } from 'express';

const storage = multer.diskStorage({
    destination: function (req: Request, file, cb) {
        cb(null, 'uploads/images');
    },
    filename: function(req: Request, file, cb) {
        const fileExtenstion = file.mimetype.split('/')[1];
        const fileName = `image-${Date.now()}.${fileExtenstion}`;
        cb(null, fileName);
    }
});

export const upload =  multer({storage: storage, fileFilter: function(req, file, cb){
    const fileType = file.mimetype.split('/')[0];
    console.log('file size',file.size);
    
    if(fileType === 'image')
        cb(null, true);
    else 
        cb(null, false);
}
});