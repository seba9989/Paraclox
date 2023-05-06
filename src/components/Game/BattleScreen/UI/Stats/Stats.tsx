import style from './Stats.module.scss'

export default function Stats() {
	return (
		<div className={style.main}>
			<div className={style.border}>
				<div className={style.hp}></div>
			</div>
			<div className={style.border}>
				<div className={style.energy}></div>
			</div>
			<div className={style.other}></div>
		</div>
	)
}
