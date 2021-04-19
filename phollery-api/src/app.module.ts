import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { PhotosController } from './controllers/photos/photos.controller';
import { PhotosService } from './services/photos/photos.service';

import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { PhotoSchema } from './schemas/photo.schema';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';

MulterModule.registerAsync({
  useFactory: () => ({
    dest: '/upload',
  }),
});

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const db = 'mongodb://database/Phollery';
// const db = "mongodb://127.0.0.1:27017/Phollery";
// db is mongodb:// => protocol, database => the ip and port of the database container , phollery => database name

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..', 'phollery'),
    }),
    MongooseModule.forRoot(db, { useNewUrlParser: true }),
     MongooseModule.forFeature([{ name: 'Photo', schema: PhotoSchema }]),
    MulterModule
  ],
  controllers: [AppController, PhotosController],
  providers: [AppService, PhotosService],
})
export class AppModule {}
