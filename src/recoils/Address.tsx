import { atom } from 'recoil';

export const fullAddressAtom = atom({
	key: 'fulladdress',
	default: ''
})

export const extraAddressAtom = atom({
	key: 'extraAddress',
	default: ''
})