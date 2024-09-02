import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const cors = {
    origin: ["http://localhost:3000"],
    methods: "GET, HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  };

  const config = new DocumentBuilder()
    .setTitle("Documentation API")
    .setDescription("The documentation for the api")
    .setVersion("1.0")
    .addTag("proof")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api-docs", app, document);

  app.enableCors(cors);
  await app.listen(3000);
}
void bootstrap();
