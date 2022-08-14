import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AuthenticationModel } from '@Domain/models/authentication.model';

@Injectable()
export class GenerateTokenUseCase {
    constructor(private readonly jwtService: JwtService) {}

    public async execute(): Promise<AuthenticationModel> {
        return {
            type: 'JWT',
            token: this.jwtService.sign({}),
            expiresIn: process.env.JWT_EXPIRES_IN,
        };
    }
}
