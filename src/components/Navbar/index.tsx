import { user_data } from '@/utils/userData'
import useMedia from 'use-media'
import { useState } from 'react'

import {
  Navbar as NavbarWrapper,
  LogoTipo,
  LogoTipoText,
  NavbarLinks,
  NavbarMobileArea,
} from './style'

import { FaBars } from 'react-icons/fa'
import { Container } from '@/styles/Global'
import { IoClose } from 'react-icons/io5'
import { Button } from '@/styles/Buttons'

export interface MenuButtonOpen {
	open: Boolean
	setOpen: (value: Boolean) => void
}

const NavBar = (): JSX.Element => {

	const isWide = useMedia({ maxWidth: "991px" })

	document.title = user_data.name_user

	const [open, setOpen] = useState(false)

	const OpenMenu = () => {
		setOpen(!open)
	};

	return (
		<NavbarWrapper>
		<Container>
			<NavbarMobileArea>
			<LogoTipo>
				<LogoTipoText>{ user_data.name_user }</LogoTipoText>
			</LogoTipo>
			{
			isWide && (
				<Button
				type="icon"
				onClick={OpenMenu}
				aria-label={ !open ? 'Abrir Menu' : 'Fechar Menu' }
				>
				{!open ? <FaBars /> : <IoClose />}
				</Button>
			)
			}
			</NavbarMobileArea>
			{ isWide ? open && <NavLinks /> : <NavLinks /> }
		</Container>
		</NavbarWrapper>
	)
}

const NavLinks = (): JSX.Element => {
	return (
		<NavbarLinks>
		<Button
			type="btLink"
			as="a"
			color="grey4"
			href={`#home`}
		>
			Home
		</Button>
		<Button
			type="btLink"
			as="a"
			color="grey4"
			href={`#projects`}
		>
			Projects
		</Button>
		<Button
			type="btLink"
			as="a"
			color="grey4"
			href={`#contact`}
		>
			Contact
		</Button>
		<Button
			type="btLink"
			as="a"
			color="grey4"
			href={`#social-media`}
		>
			Social Media
		</Button>
	
		</NavbarLinks>
	)
}

export { NavBar, NavLinks }
