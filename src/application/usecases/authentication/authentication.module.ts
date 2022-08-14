import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { JwtStrategy } from '@Infrastructure/strategies/jwt.strategy';
import { GenerateTokenUseCase } from '@Application/usecases/authentication/generate-token.usecase';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn:  process.env.JWT_EXPIRES_IN },
        }),
    ],
    providers: [
        JwtStrategy,
        GenerateTokenUseCase,
    ],
    exports: [GenerateTokenUseCase],
})

export class AuthenticationModule {}
