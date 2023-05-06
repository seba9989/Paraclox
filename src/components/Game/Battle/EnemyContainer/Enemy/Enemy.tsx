import { Enemy } from '../../../../../types/interface'
import style from './Enemy.module.scss'

export default function Enemy(props: { enemy: Enemy }) {
	return (
		<div className={style.main}>
			<img
				src={`https://github.com/seba9989/paraclox/tree/main/src/assets/enemys/${props.enemy.name}/idle.gif?raw=true`}
				alt=''
			/>
		</div>
	)
}
