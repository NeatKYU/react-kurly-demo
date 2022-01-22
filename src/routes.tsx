import { BrowserRouter, Routes as Switch, Route} from 'react-router-dom';
import { HomePage } from '@pages/HomePage';
import { LoginPage } from '@pages/LoginPage';

export const Routes = () => {

return (
	 <BrowserRouter>
	 	<Switch>
			<Route path={'/'} element={<HomePage/>} />
			<Route path={'/login'} element={<LoginPage/>}/>
		</Switch>
	 </BrowserRouter>
 )
}

Routes.prototype = {

}