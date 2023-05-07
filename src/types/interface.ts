import * as Type from './type'

//Enemy
export interface Enemy {
	id: number
	name: string
	attacks: [] | never[]
	hp: number
}
export interface EnemysContext {
	enemies: Enemy[]
	onChange: () => void
}

//Player
export interface Player {
	name: string
	hp: {
		max: number
		current: number
	}
	energy: {
		max: number
		current: number
	}
	// attacks: {
	// 	name: string
	// 	target: boolean
	// 	appliedEffect: string
	// }[]
	// inventory: {
	// 	name: string
	// }[]
}
export interface PlayersContext {
	player: Player | null
	onChange: (action: Type.changePlayerStatsAction, value: number) => void
}

// //Multy use interface
// export interface Attack {
// 	name: string;
// 	damage: number;
// 	// type: attackType;
// 	// cost: {
// 	// 	type: costType;
// 	// 	volume: number;
// 	// };
// }

// export interface Item {
// 	name: string;
// 	// type: string;
// 	// stacked: boolean;
// 	// quantity?: number;
// }

// export interface Effect {
// 	name: string;
// }

// //All player interface
// export interface Stats {
// 	hp: {
// 		current: number;
// 		max: number;
// 		percent: string;
// 		change: (newHp: number) => void;
// 	};
// 	energy: {
// 		current: number;
// 		max: number;
// 		percent: string;
// 		change: (newEnergy: number) => void;
// 	};
// 	//defensive: number;
// 	//crit: number;
// }

// export interface Player {
// 	name: string;
// 	attacks: Attack[];
// 	stats: Stats;
// 	inventory: Item[] | {}[];
// 	effects?: Effect[];
// }

// //All opponent interface
// export interface OpponentInterface {
// 	name: string;
// 	hp: number;
// 	attacks: Attack[];
// }
