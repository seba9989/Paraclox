import style from './ChoosesCharacter.module.scss'
import { useContext } from 'react'
import GameMachineContext from '../../../context/gameMachineContext'

export default function ChoosesCharacter() {
	const gameMachineContext = useContext(GameMachineContext)
	console.log(gameMachineContext)

	return (
		<div className={style.main}>
			<button onClick={() => gameMachineContext('SELECT_CHARACTER')}>Test</button>
		</div>
	)
}
