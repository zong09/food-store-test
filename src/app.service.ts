import { Injectable } from '@nestjs/common';
import { OrderRequestDto } from './app.dto';
import { MenuSet } from './enum/menu-set';
import { Menu } from './models/menu';

@Injectable()
export class AppService {
  calculatePrice(order: OrderRequestDto): number {
    const memberDiscount = 10;
    const promotionDiscount = 5;
    let price = 0;

    order.foodItem.forEach((orderItem) => {
      const foodMenu = Menu.find((item) => item.name === orderItem.menuSet);
      if (foodMenu && orderItem.quantity > 0) {
        if (
          orderItem.quantity > 1 &&
          (foodMenu.name === MenuSet.OrangeSet ||
            foodMenu.name === MenuSet.PinkSet ||
            foodMenu.name === MenuSet.GreenSet)
        ) {
          const discountPrice =
            (foodMenu.price * orderItem.quantity * (100 - promotionDiscount)) /
            100;
          price += discountPrice;
        } else price += foodMenu.price * orderItem.quantity;
      }
    });

    if (order.customerNo) price = (price * (100 - memberDiscount)) / 100;
    return price;
  }
}
