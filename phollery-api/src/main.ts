import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(NestFactory)
  const app = await NestFactory.create(AppModule);
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  app.enableCors();
  const port = process.env.PORT || '3000';
  await app.listen(port);
}
bootstrap();
