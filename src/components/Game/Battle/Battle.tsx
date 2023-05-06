import style from './Battle.module.scss'
import EnemyContainer from './EnemyContainer/EnemyContainer'

import { EnemyList } from '../../../FakeDB/Tests.json'

export default function Battle() {
	return (
		<div className={style.main}>
			<div className={style.top}>
				<EnemyContainer enemyList={EnemyList} />
			</div>
			<div className={style.bottom}></div>
		</div>
	)
}
