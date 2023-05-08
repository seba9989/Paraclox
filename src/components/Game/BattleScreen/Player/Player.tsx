import style from './Player.module.scss'
import PlayerContext from '../../../../context/playerContext'
import { useContext } from 'react'
import { PlayersContext } from '../../../../types/interface'

export default function Player() {
	const playerContext = useContext<PlayersContext | null>(PlayerContext)

	return (
		<div className={style.main}>
			<img
				src={`https://github.com/seba9989/paraclox/blob/main/src/assets/characters/${playerContext?.player?.name}/idle.gif?raw=true`}
				alt=''
			/>
		</div>
	)
}
