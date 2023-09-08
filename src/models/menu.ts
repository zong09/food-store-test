import { MenuSet } from '../enum/menu-set';

export class MenuDetail {
  name: MenuSet;
  price: number;
}

export const Menu: MenuDetail[] = [
  {
    name: MenuSet.RedSet,
    price: 50,
  },
  {
    name: MenuSet.GreenSet,
    price: 40,
  },
  {
    name: MenuSet.BlueSet,
    price: 30,
  },
  {
    name: MenuSet.YellowSet,
    price: 50,
  },
  {
    name: MenuSet.PinkSet,
    price: 80,
  },
  {
    name: MenuSet.PurpleSet,
    price: 90,
  },
  {
    name: MenuSet.OrangeSet,
    price: 120,
  },
];
