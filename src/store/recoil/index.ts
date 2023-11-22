import { atom } from 'recoil';

export const defaultAction = atom<boolean>({
  key: 'default/action',
  default: false,
});
