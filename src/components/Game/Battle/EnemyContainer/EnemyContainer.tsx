import style from './EnemyContainer.module.scss'
import Enemy from './Enemy/Enemy'
import { EnemyList } from '../../../../types/type'

export default function EnemyContainer(props: { enemyList: EnemyList }) {
	return (
		<div className={style.main}>
			{props.enemyList.map(enemy => {
				console.log(enemy.id)
				return <Enemy key={enemy.id} enemy={enemy} />
			})}
		</div>
	)
}
