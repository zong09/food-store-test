import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { OrderRequestDto } from './app.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('order')
  @ApiOperation({ summary: 'Calculate food store price' })
  async calculatePrice(@Body() orderRequest: OrderRequestDto) {
    const totalPrice = await this.appService.calculatePrice(orderRequest);
    return {
      price: totalPrice.toFixed(2),
    };
  }
}
