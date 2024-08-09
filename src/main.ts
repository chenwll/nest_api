import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => {
    Logger.log('项目启动成功，访问地址: http://localhost:3000');
  });
}
bootstrap();
