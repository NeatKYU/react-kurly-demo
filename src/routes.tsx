import { Routes as Switch, Route} from 'react-router-dom';
import { HomePage } from '@pages/HomePage';
import { LoginPage } from '@pages/LoginPage';
import { RegisterPage } from '@pages/RegisterPage';

export const Routes = () => {

return (
	<Switch>
		<Route path={'/'} element={<HomePage/>} />
		<Route path={'/login'} element={<LoginPage/>}/>
		<Route path={'/register'} element={<RegisterPage/>}/>
	</Switch>
 )
}

Routes.prototype = {

}