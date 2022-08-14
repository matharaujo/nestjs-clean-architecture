import { ApiProperty } from '@nestjs/swagger';

export class AuthenticationPresenter {
    @ApiProperty()
    public type: string;

    @ApiProperty()
    public token: string;

    @ApiProperty()
    public expiresIn: string;
}
