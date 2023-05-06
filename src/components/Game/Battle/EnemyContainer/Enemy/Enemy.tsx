import { Enemy } from '../../../../../types/interface'
import style from './Enemy.module.scss'

function getRandomInt(max: number) {
	return Math.floor(Math.random() * max)
}

export default function Enemy(props: { enemy: Enemy }) {
	let random = getRandomInt(75)

	return (
		<div className={style.main} style={{ marginBottom: random }}>
			<div className={style.hpMain}>
				<div id={`opponentHp-${props.enemy.id}`} className={`${style.hp} opponentHp`}></div>
				<div>{props.enemy.name}</div>
			</div>
			<img
				src={`https://github.com/seba9989/paraclox/blob/main/src/assets/enemys/${props.enemy.name}/idle.gif?raw=true`}
				alt=''
			/>
		</div>
	)
	random = 0
}
