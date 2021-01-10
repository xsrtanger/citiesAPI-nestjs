import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export enum VisitReason {
  undefined = 'Undefined',
  travel = 'Travel',
  job = 'Job',
}

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  city: string;

  @ApiProperty()
  @Column({ type: 'date' })
  date: Date;

  @Column({
    type: 'enum',
    enum: VisitReason,
    default: VisitReason.undefined,
  })
  visit_reason: VisitReason;
}
