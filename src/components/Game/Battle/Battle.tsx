import style from './Battle.module.scss'
import Top from './Top/Top'
import Buttom from './Buttom/Buttom'

export default function Battle() {
	return (
		<div className={style.main}>
			<Top />
			<Buttom />
		</div>
	)
}
