import { ApiProperty } from '@nestjs/swagger';
import { MenuSet } from './enum/menu-set';

export class OrderMenuRequestDto {
  @ApiProperty({
    enum: ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange'],
  })
  menuSet: MenuSet;

  @ApiProperty({
    minimum: 1,
    default: 1,
  })
  quantity: number;
}

export class OrderRequestDto {
  @ApiProperty()
  customerNo: string;

  @ApiProperty({
    isArray: true,
    type: () => OrderMenuRequestDto,
  })
  foodItem: OrderMenuRequestDto[];
}
