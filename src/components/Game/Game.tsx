import { useMachine } from '@xstate/react'
import { createMachine } from 'xstate'
import GameMachineContext from '../../context/gameMachineContext'

const GameStates = {
	ChoosesCharacter: 'choosesCharacter',
	BattleScreen: 'battleScreen',
	DeadScreen: 'deadScreen',
	WinScreen: 'winScreen',
}

const GameMachine = createMachine({
	id: 'Game Machine',
	initial: GameStates.ChoosesCharacter,
	states: {
		choosesCharacter: {
			on: {
				SELECT_CHARACTER: {
					target: GameStates.BattleScreen,
				},
			},
		},
		battleScreen: {
			on: {
				PLAYER_DEAD: {
					target: GameStates.DeadScreen,
				},
				PLAYER_WIN: {
					target: GameStates.WinScreen,
				},
			},
		},
		deadScreen: {},
		winScreen: {
			on: {
				NEXT_BATTLE: {
					target: GameStates.BattleScreen,
				},
			},
		},
	},
	schema: {
		events: {} as
			| { type: 'SELECT_CHARACTER' }
			| { type: 'PLAYER_DEAD' }
			| { type: 'PLAYER_WIN' }
			| { type: 'NEXT_BATTLE' },
	},
	predictableActionArguments: true,
	preserveActionOrder: true,
})

import ChoosesCharacter from './ChoosesCharacter/ChoosesCharacter'
import BattleScreen from './BattleScreen/BattleScreen'

import PlayerContext from '../../context/playerContext'
import { useState } from 'react'
import { Player } from '../../types/interface'
import { changePlayerStatsAction } from '../../types/type'
import { PlayerBlueprints } from '../../FakeDB/Tests.json'

export default function Game() {
	const [currentMachine, send] = useMachine(GameMachine)

	const [playerState, setPayerState] = useState<Player>({
		name: '',
		hp: {
			max: 0,
			current: 0,
		},
		energy: {
			max: 0,
			current: 0,
		},
	})

	const changePlayerStats = (action: changePlayerStatsAction, value: number) => {
		switch (action) {
			case 'hp':
				playerState.hp.current = value
				setPayerState({ ...playerState })
				break
			case 'energy':
				playerState.energy.current = value
				setPayerState({ ...playerState })
				break
		}
	}

	const selectCharacter = (name: string) => {
		const playerModel: Player | undefined = PlayerBlueprints.find(player => player.name === name)

		if (typeof playerModel !== 'undefined') {
			setPayerState(playerModel)
			send('SELECT_CHARACTER')
		} else {
			console.log('Player not found')
		}
	}

	return (
		<>
			<PlayerContext.Provider
				value={{
					player: playerState,
					onChange: (action: changePlayerStatsAction, value: number) => changePlayerStats(action, value),
				}}>
				<GameMachineContext.Provider value={send}>
					{currentMachine.matches(GameStates.ChoosesCharacter) && (
						<ChoosesCharacter select={(name: string) => selectCharacter(name)} />
					)}
					{currentMachine.matches(GameStates.BattleScreen) && <BattleScreen />}
				</GameMachineContext.Provider>
			</PlayerContext.Provider>
		</>
	)
}
