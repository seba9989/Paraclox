import style from './BattleScreen.module.scss'
import EnemyContainer from './EnemyContainer/EnemyContainer'

import { EnemyList } from '../../../FakeDB/Tests.json'
import Player from './Player/Player'
import Stats from './UI/Stats/Stats'

export default function BattleScreen() {
	return (
		<div className={style.main}>
			<div className={style.top}>
				<Player />
				<EnemyContainer enemyList={EnemyList} />
			</div>
			<div className={style.bottom}>
				<Stats />
			</div>
		</div>
	)
}
