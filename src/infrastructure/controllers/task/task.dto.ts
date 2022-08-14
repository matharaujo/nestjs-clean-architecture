import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDate, IsNumber } from 'class-validator';

export class CreateTaskDTO {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  private readonly id: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  private readonly name: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  private readonly priority: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsDate()
  private readonly endDate: Date;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsDate()
  private readonly createdAt: Date;
}
