import { createContext } from 'react'
import { PlayersContext } from '../types/interface'

const PlayerContext = createContext<PlayersContext | null>(null)

export default PlayerContext
