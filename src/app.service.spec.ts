import { Test } from '@nestjs/testing';

import { AppService } from './app.service';
import { MenuSet } from './enum/menu-set';

describe('AppService', () => {
  let service: AppService;
  beforeEach(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('Food Store Calculation', () => {
    it('should calculate normal price correctly', () => {
      /*
        Red 50
        Green 40
        Total 90
        */
      expect(
        service.calculatePrice({
          customerNo: '',
          foodItem: [
            {
              menuSet: MenuSet.RedSet,
              quantity: 1,
            },
            {
              menuSet: MenuSet.GreenSet,
              quantity: 1,
            },
          ],
        }),
      ).toBe(90);
    });

    it('should calculate discount customer price correctly', () => {
      /*
        Red 120
        Pink 80
        Member discount 20
        Total 180
        */
      expect(
        service.calculatePrice({
          customerNo: '00001',
          foodItem: [
            {
              menuSet: MenuSet.OrangeSet,
              quantity: 1,
            },
            {
              menuSet: MenuSet.PinkSet,
              quantity: 1,
            },
          ],
        }),
      ).toBe(180);
    });

    it('should calculate discount promotion price correctly', () => {
      /*
        Orange 120 * 2 => 240 - 12(5%) = 228
        Pink 80 * 2 => 160 - 8 (5%) = 152
        Green = 40
        Total 420
        */
      expect(
        service.calculatePrice({
          customerNo: '',
          foodItem: [
            {
              menuSet: MenuSet.OrangeSet,
              quantity: 2,
            },
            {
              menuSet: MenuSet.PinkSet,
              quantity: 2,
            },
            {
              menuSet: MenuSet.GreenSet,
              quantity: 1,
            },
          ],
        }),
      ).toBe(420);
    });

    it('should calculate discount promotion and customer price correctly', () => {
      /*
          Orange 120 * 2 => 240 - 12(5%) = 228
          Pink 80 * 2 => 160 - 8 (5%) = 152
          Green = 40
          Member discount 42
          Total 378
          */
      expect(
        service.calculatePrice({
          customerNo: '00001',
          foodItem: [
            {
              menuSet: MenuSet.OrangeSet,
              quantity: 2,
            },
            {
              menuSet: MenuSet.PinkSet,
              quantity: 2,
            },
            {
              menuSet: MenuSet.GreenSet,
              quantity: 1,
            },
          ],
        }),
      ).toBe(378);
    });
  });
});
