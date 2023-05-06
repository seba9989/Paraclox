import { NavLink } from 'react-router-dom'
import style from './Header.module.scss'

export default function Header() {
	return (
		<div className={style.main}>
			<NavLink to='/' className={style.logo}>
				<img src='https://github.com/seba9989/paraclox/blob/main/src/assets/UI/logos/full.png?raw=true' alt='' />
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
