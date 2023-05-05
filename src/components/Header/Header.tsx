import { NavLink } from 'react-router-dom'
import style from './Header.module.scss'

export default function Header() {
	return (
		<div className={style.main}>
			<NavLink to='/' className={style.logo}>
				<img src='http:\\192.168.8.173:8080\ParacloxAssets\UI\logos/full.png' alt='' />
			</NavLink>

			<div>
				<NavLink to='/game'>Game</NavLink>
				<NavLink to=''>Test</NavLink>
				<NavLink to=''>Test</NavLink>
				<NavLink to=''>Test</NavLink>
			</div>
		</div>
	)
}
