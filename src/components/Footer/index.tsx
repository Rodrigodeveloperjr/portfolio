import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { Container, Flex, Box } from '@/styles/Global'
import { Footer as FooterWrapper } from './style'
import { UserImage } from '@/pages/home/style'
import { user_data } from '@/utils/userData'
import { HandEffect } from '../HandEffect'
import { Button } from '@/styles/Buttons'
import { Text } from '@/styles/Text'


const Footer = (): JSX.Element => {
	return (
		<FooterWrapper id="social-media">
		<Container>
			<Flex>
			<UserImage
				src={`https://github.com/${ user_data.github_user }.png`}
				alt={ user_data.name_user }
				title={ user_data.name_user }
				width={"70px"}
				height={"70px"}
			/>
			<Box css={{ marginLeft: "$2" }}>
				<Text type="heading4" color="grey5" css={{ marginBottom: "$2" }}>
				Thank you!{" "}
				<HandEffect />
				</Text>
				<Text type="body1" color="grey2">
				Follow me on my social networks and let's talk
				</Text>
			</Box>
			</Flex>
			<Flex>
			<Button className="instagram" type="circle" as="a" target="_blank" href={`https://instagram.com/${ user_data.instagram_user }`}>
				<FaInstagram />
			</Button>
			<Button className="linkedin" type="circle" as="a" target="_blank" href={`https://linkedin.com/in/${ user_data.linkedin_user }`}>
				<FaLinkedinIn />
			</Button>
			</Flex>
		</Container>
		</FooterWrapper>
	)
}

export { Footer }
