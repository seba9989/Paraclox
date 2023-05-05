import BetaEnemy from '../../../../pre-components/enemys/BetaEnemy/BetaEnemy'
import style from './Top.module.scss'

export default function Top() {
	return (
		<div className={style.background}>
			<div className={style.main}>
				<BetaEnemy />
			</div>
		</div>
	)
}
