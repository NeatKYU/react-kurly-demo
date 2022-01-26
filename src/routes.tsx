import { Routes as Switch, Route} from 'react-router-dom';
import { HomePage } from '@pages/HomePage';
import { LoginPage } from '@pages/LoginPage';
import { RegisterPage } from '@pages/RegisterPage';
import { ProductDetailPage } from '@pages/ProductDetailPage';
import { CartPage } from '@pages/CartPage';

export const Routes = () => {

return (
	<Switch>
		<Route path={'/'} element={<HomePage/>} />
		<Route path={'/login'} element={<LoginPage/>}/>
		<Route path={'/register'} element={<RegisterPage/>}/>
		<Route path={'/product-detail'} element={<ProductDetailPage/>}/>
		<Route path={'/cart'} element={<CartPage/>}/>
	</Switch>
 )
}

Routes.prototype = {

}