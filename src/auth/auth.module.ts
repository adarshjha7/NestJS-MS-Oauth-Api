import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
// import { AuthService } from './auth.service';
import { MicrosoftOAuthStrategy } from './strategies/microsoft-oauth/microsoft-oauth.strategy';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'microsoft' })],
  controllers: [AuthController],
  providers: [MicrosoftOAuthStrategy],
})
export class AuthModule {}
