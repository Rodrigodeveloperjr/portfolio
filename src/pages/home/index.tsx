// Styles
import { Container, Flex } from '@/styles/Global'
import { Button } from '@/styles/Buttons'
import { Text } from '@/styles/Text'

// Components
import { Contacts } from '@/components/Contacts'
import { Project } from '@/components/Project'
import { Stack } from '@/components/Stack'

// Data
import { stack_data } from '@/utils/stackData'
import { user_data } from '@/utils/userData'

import { FaGithub } from 'react-icons/fa'

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from './style'

import { HandEffect } from '@/components/HandEffect'

const Home = (): JSX.Element => {
	return (
		<main id="home">
		<Header>
			<Container>
			<HeaderContent>
				<Flex>
				<UserImage
					src={`https://github.com/${ user_data.github_user }.png`}
					alt={ user_data.name_user }
					title={ user_data.name_user }
					width={"48px"}
					height={"48px"}
				/>
				<Text color="grey4" css={{ marginLeft: "$2" }}>
					Hello, my name is { user_data.name_user } <HandEffect />
				</Text>
				</Flex>
				<Text as="h1" type="heading1" color="grey5">
				I{" "}
				<Text as="span" type="heading1" color="brand1">
					love
				</Text>{" "}
				creating and{" "}
				<Text as="span" type="heading1" color="brand1">
					developing
				</Text>{" "}
				projects
				</Text>
				<Text type="body1" color="grey2">
				Discover here in this environment, created especially for you, all
				my projects and technologies
				</Text>
				<HeaderButtonsArea>
				<Button as="a" type="primary" href="#projects">
					See Projects
				</Button>
				<Button
					as="a"
					type="circle"
					target="_blank"
					href={`https://github.com/${ user_data.github_user }`}
				>
					<FaGithub />
				</Button>
				</HeaderButtonsArea>
				<StackCards>
				{
				stack_data.map((stack, index) => (
					<Stack key={ index } title={ stack.title } icon={ stack.img } color={ stack.color } />
				))
				}
				</StackCards>
			</HeaderContent>
			</Container>
		</Header>
		<ProjectsArea id="projects">
			<Container>
			<ProjectAreaWrapperColumns>
				<ProjectsAreaSocialMediaMessage>
				<Text as="h2" type="heading4" color="grey4">
					My projects
				</Text>
				<Text as="p" type="body1" color="grey2">
					Projects created at{" "}
					<Text as="span" color="brand5">
					Kenzie Academy
					</Text>
				</Text>
				</ProjectsAreaSocialMediaMessage>
				<ProjectsAreaContent>
				<Project />
				</ProjectsAreaContent>
			</ProjectAreaWrapperColumns>
			</Container>
		</ProjectsArea>
		<Contacts />
		</main>
	)
}

export { Home }
