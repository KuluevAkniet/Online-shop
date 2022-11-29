import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();

  const config = new DocumentBuilder()
      .addBearerAuth()
      .setTitle('Title_of_your_Swagger')
      .setDescription('Description_of_swagger')
      .setVersion('1.0')
      .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const PORT = process.env.PORT;
  await app.listen(PORT || 3000, () => {
    Logger.log(`Server started on PORT ${PORT}`);
  });
}
bootstrap();