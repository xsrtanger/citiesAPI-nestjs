import { ApiProperty } from '@nestjs/swagger';
import { VisitReason } from '../entities/city.entity';

export class CreateCityDto {
  @ApiProperty({ default: 'Tokio' })
  readonly city: string;

  @ApiProperty()
  readonly date: Date;

  @ApiProperty({
    type: 'enum',
    enum: VisitReason,
  })
  readonly visit_reason: VisitReason;
}
