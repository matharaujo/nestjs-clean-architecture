import { Controller, Post, Response, HttpStatus } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';

import { ApiResponseType } from '@Infrastructure/decorators/swagger.decorator';
import { AuthenticationPresenter } from '@Infrastructure/controllers/authentication/authentication.presenter';
import { GenerateTokenUseCase } from '@Application/usecases/authentication/generate-token.usecase';

@Controller('authentication/')
@ApiTags('authentication')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(AuthenticationPresenter)
export class AuthenticationController {
    constructor(private readonly generateTokenUseCase: GenerateTokenUseCase) {}

    @Post()
    @ApiResponseType(AuthenticationPresenter)
    public async generateToken(@Response() response): Promise<AuthenticationPresenter> {
        const authentication = await this.generateTokenUseCase.execute();

        return response.status(HttpStatus.OK).json(authentication);
    }
}
