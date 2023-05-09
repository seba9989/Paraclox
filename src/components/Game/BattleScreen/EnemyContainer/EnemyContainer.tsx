import style from './EnemyContainer.module.scss'
import Enemy from './Enemy/Enemy'
import * as Type from '../../../../types/interface'

export default function EnemyContainer(props: { enemyList: Type.Enemy[] }) {
	return (
		<div className={style.main}>
			{props.enemyList.map(enemy => {
				console.log(enemy.id)
				return <Enemy key={enemy.id} enemy={enemy} />
			})}
		</div>
	)
}
