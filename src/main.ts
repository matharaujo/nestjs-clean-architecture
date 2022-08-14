import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import * as dotenv from 'dotenv';
import * as path from 'path';

import { ServerModule } from './server.module';
import { LoggingInterceptor } from '@Infrastructure/interceptors/logger.interceptor';
import { ResponseFormat, ResponseInterceptor } from '@Infrastructure/interceptors/response.interceptor';

async function bootstrap(): Promise<void> {
    dotenv.config({ path: path.resolve(process.cwd() + `/.env.${process.env.NODE_ENV}`) });

    const server = await NestFactory.create(ServerModule.forRoot());

    server.useGlobalInterceptors(new LoggingInterceptor());
    server.useGlobalInterceptors(new ResponseInterceptor());

    server.useGlobalPipes(new ValidationPipe());

    server.setGlobalPrefix('api');
  
    const configuration = new DocumentBuilder()
        .setTitle('API Documentation')
        .setVersion('1.0')
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' })
        .setExternalDoc('Postman Collection', '/documentation/json')
        .build();
  
    const document = SwaggerModule.createDocument(server, configuration, {
        extraModels: [ResponseFormat],
        deepScanRoutes: true,
    });

    SwaggerModule.setup('documentation', server, document, {
        swaggerOptions: {
            defaultModelsExpandDepth: 0,
        },
    });

    await server.listen(process.env.PORT_API);

    Logger.log(`✔ Server ready at http://localhost:${process.env.PORT_API}/`);
}

bootstrap();
