import { Controller, Get, Post, Req, Delete, UseInterceptors, UploadedFile, Param, Res } from '@nestjs/common';
import { PhotosService } from 'src/services/photos/photos.service';
import { IPhoto } from 'src/interfaces/photo.interface';
import { Request } from 'express';

import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('photos')
export class PhotosController {
    constructor( private readonly photosService: PhotosService){}

    // serve the photo
    @Get('uploads/:fileId')
    async serveUploadedFile(@Param('fileId') fileId, @Res() res): Promise<any> {
      res.sendFile(fileId, { root: 'uploads'});
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', 
    {
        storage: diskStorage({
          destination: './uploads', 
          filename: (req, file, cb) => {
          const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
          return cb(null, `${randomName}${extname(file.originalname)}`)
        }
        })
      }
    ))
    // 'image' is the same as the name of the file uploaded
    // on second thought stick to file as it more ubiquitous
    uploadFile(@UploadedFile() file) {
        file.path = `photos/${file.path.split("\\").join("/")}`;
        return { url: file.path };
    }

    @Get() 
    getPhotos(): any {
        return this.photosService.getAll();
    }

    @Get(':id')
    getPhoto(@Req() req: Request): any{
        return this.photosService.getPhoto(req.params.id);
    }

    @Post()
    addPhoto(@Req() req: Request): any{
        const { body : { name, url }} = req;
        return this.photosService.create({ name, url });
    }

    @Delete(':id')
    removePhoto(@Req() req: Request): any{
        return this.photosService.deletePhoto(req.params.id);
    }
}
