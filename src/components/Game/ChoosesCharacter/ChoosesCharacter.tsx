import style from './ChoosesCharacter.module.scss'
import { PlayerBlueprints } from '../../../FakeDB/Tests.json'
import { Player } from '../../../types/interface'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
	selectCharacter: string
}

export default function ChoosesCharacter(props: { select: (name: string) => void }) {
	const { register, handleSubmit, watch } = useForm<Inputs>({
		defaultValues: {
			selectCharacter: 'mage',
		},
	})

	const formWach = watch('selectCharacter')

	const onSubmit: SubmitHandler<Inputs> = data => {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.main}>
			<div className={style.characterList}>
				{PlayerBlueprints.map((character: Player, index: number) => {
					const { name } = character

					return (
						<div className={style.radio} key={index}>
							<input {...register('selectCharacter')} type='radio' id={`${index}`} value={name} />
							<label htmlFor={`${index}`}>
								<img
									src={
										formWach === name
											? 'https://github.com/seba9989/paraclox/blob/main/src/assets/UI/character-icons/active/mage.png?raw=true'
											: 'https://github.com/seba9989/paraclox/blob/main/src/assets/UI/character-icons/not-active/mage.png?raw=true'
									}
									alt=''
								/>
							</label>
						</div>
					)
				})}
			</div>
			<div className={style.characterIMG}>
				<img src='https://github.com/seba9989/paraclox/blob/main/src/assets/characters/mage/idle.gif?raw=true' alt='' />
			</div>
			<div className={style.characterSkills}></div>
			<div className={style.characterDescription}>
				<button
					type='submit'
					onClick={() => {
						props.select(formWach)
						console.log(formWach)
					}}>
					Submit
				</button>
			</div>

			{/* <button onClick={() => gameMachineContext('SELECT_CHARACTER')}>Test</button> */}
		</form>
	)
}
