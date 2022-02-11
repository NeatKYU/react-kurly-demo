import { atom } from 'recoil';

export const userAtom = atom({
	key: 'user',
	default: JSON.parse(sessionStorage.getItem('user')|| '{}')
})

export const userMenuAtom = atom({
	key: 'userMenu',
	default: 1,
})

export const isLoginAtom = atom({
	key: 'isLogin',
	default: sessionStorage.getItem('user') ? true : false
})