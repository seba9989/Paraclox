import { createContext } from 'react'
import { EnemysContext } from '../types/interface'

const EnemysContext = createContext<EnemysContext | null>(null)

export default EnemysContext
