import Header from 'components/MoviesList'
import { Outlet } from 'react-router-dom'


const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}

export default Layout