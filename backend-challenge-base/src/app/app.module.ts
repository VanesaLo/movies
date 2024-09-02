import { Module } from "@nestjs/common";
import { UsersModule } from "src/users/users.module";
import { AuthModule } from "src/auth/auth.module";
import { ProviderModule } from "src/provider/provider.module";

@Module({
  imports: [UsersModule, AuthModule, ProviderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
