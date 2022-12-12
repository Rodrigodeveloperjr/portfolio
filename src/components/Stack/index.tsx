import { IconType } from 'react-icons/lib'
import { StackCard } from './style'
import { Text } from '@/styles/Text'


interface StackProps {
	title: string
	icon: string | IconType
	color: string
	key: number
}

const Stack = (

	{ title, icon: Icon, color }: StackProps,
	key: number
	): JSX.Element => {
	
	const isString = typeof Icon === 'string'

	return (
		<StackCard className={`${key}`} key={key}>
		<Text>{title}</Text>
		{
		isString ? (
			<img src={Icon} alt={title} title={title} height="84px" width="84px" />
		) : (
			<Icon size={84} color="#868E96" onMouseOver={ (e) => e.currentTarget.style.color = color } onMouseOut={ (e) => e.currentTarget.style.color = "#868E96" } />
		)
		}
		</StackCard>
	)
}

export { Stack }
