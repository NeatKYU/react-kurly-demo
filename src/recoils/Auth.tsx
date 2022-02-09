import { atom } from 'recoil';

// const storageValue = JSON.parse(sessionStorage.getItem('user') || '')

export const authAtom = atom({
	key: 'auth',
	default: JSON.parse(sessionStorage.getItem('user')|| '{}')
})