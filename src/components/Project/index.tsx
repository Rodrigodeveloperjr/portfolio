import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from './style'

import { FaGithub, FaShare } from 'react-icons/fa'
import { user_data } from '@/utils/userData'
import { useEffect, useState } from 'react'
import { Text } from '@/styles/Text'

interface ReposType {
	id: number
	name: string
	language: string
	description: string
	html_url: string
	homepage: string
}

const Project = (): JSX.Element => {

	const [ repositories, setRepositories ] = useState<ReposType[]>([])

	useEffect(() => {
		const fetchData = async () => {
		const data = await fetch(
			`https://api.github.com/users/${ user_data.github_user }/repos`
		)
		const json = await data.json()
		
		setRepositories(json)

		return json
		}
		fetchData()
	}, [])

	return (
		<>
		{
		repositories?.map((repository) => (
			<ProjectWrapper key={repository.id}>
			
			<ProjectTitle
				as="h2"
				type="heading3"
				css={{ marginBottom: "$3" }}
				color="grey4"
			>
				{repository.name}
			</ProjectTitle>

			<ProjectStack>
				<Text type="body2" color="grey2">
				Language:
				</Text>
				{repository.language ? (
				<ProjectStackTech>
					<Text color="grey2" type="body2">
					{repository.language}
					</Text>
				</ProjectStackTech>
				) : (
				<ProjectStackTech>
					<Text color="grey2" type="body2">
					Not identified
					</Text>
				</ProjectStackTech>
				)}
			</ProjectStack>

			<Text type="body1" color="grey2">
				{repository.description}
			</Text>
			<ProjectLinks>
				<ProjectLink target="_blank" href={repository.html_url}>
				<FaGithub /> Github Code
				</ProjectLink>
				{repository.homepage && (
				<ProjectLink target="_blank" href={repository.homepage}>
					<FaShare /> Application
				</ProjectLink>
				)}
			</ProjectLinks>
			
			</ProjectWrapper>
		))}
		</>
	)
}

export { Project }
