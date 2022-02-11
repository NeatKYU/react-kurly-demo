import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { userAtom, isLoginAtom } from '@recoils/User';

export function useUserAction () {
	const setUser = useSetRecoilState(userAtom);
	const setIsLogin = useSetRecoilState(isLoginAtom);

	function logout() {
		setUser(null);
		setIsLogin(false);
		sessionStorage.removeItem('user');
	}

	return {
		logout
	}
}