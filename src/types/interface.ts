import { attackType, costType } from './type'

//Enemy
export interface Enemy {
	id: number
	name: string
	attacks: [] | never[]
	hp: number
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
