import style from './ChoosesCharacter.module.scss'
import { useContext } from 'react'
import GameMachineContext from '../../../context/gameMachineContext'
import { PlayerBlueprints } from '/src/FakeDB/Tests.json'
import { Player } from '../../../types/interface'

export default function ChoosesCharacter(props: { select: (name: string) => void }) {
	const gameMachineContext = useContext(GameMachineContext)
	console.log(gameMachineContext)

	return (
		<div className={style.main}>
			<div className={style.characterList}>
				{PlayerBlueprints.map((character: Player, index: number) => {
					const { name } = character

					return (
						<div className={style.radio}>
							<input type='radio' name='choosesCharacter' id={`${index}`} />
							<label htmlFor={`${index}`}>
								<img src='' alt='' />
							</label>
						</div>
					)
				})}
			</div>
			<div className={style.characterIMG}>
				<img src='https://github.com/seba9989/paraclox/blob/main/src/assets/characters/mage/idle.gif?raw=true' alt='' />
			</div>
			<div className={style.characterSkills}></div>
			<div className={style.characterDescription}></div>

			{/* <button onClick={() => gameMachineContext('SELECT_CHARACTER')}>Test</button> */}
		</div>
	)
}
