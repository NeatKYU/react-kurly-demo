import { atom } from 'recoil';

export const CartAtom = atom({
	key: 'cart',
	default: []
})

export const AmountAtom = atom({
	key: 'cartAmount',
	default: 0,
})