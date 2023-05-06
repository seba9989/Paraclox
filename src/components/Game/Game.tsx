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

export default function Game() {
	const [currentMachine, send] = useMachine(GameMachine)
	return (
		<>
			<GameMachineContext.Provider value={send} >
				{currentMachine.matches(GameStates.ChoosesCharacter) && <ChoosesCharacter />}
				{currentMachine.matches(GameStates.BattleScreen) && <BattleScreen />}
			</GameMachineContext.Provider>
		</>
	)
}
