import { atom } from 'recoil';

export const userAtom = atom({
	key: 'user',
	default: null
})

export const isLoginAtom = atom({
	key: 'isLogin',
	default: false,
})