import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const logger = new Logger('Bootstrap');

  app.use(helmet());
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, transform: true, forbidNonWhitelisted: true }),
  );

  const config = app.get(ConfigService);
  const port = config.get<number>('PORT', 3000);
  const corsOrigins = config.get<string>('CORS_ORIGINS', '*');
  const origin = corsOrigins === '*' ? true : corsOrigins.split(',').map((o) => o.trim());
  app.enableCors({ origin, credentials: true });

  await app.listen(port);
  logger.log(`FreshFarm API listening on port ${port}`);
}
bootstrap();
