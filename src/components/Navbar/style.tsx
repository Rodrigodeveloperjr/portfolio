import { Flex, Container } from '@/styles/Global'
import { styled } from '@/styles/stitches.config'
import { Button } from '@/styles/Buttons'


const Navbar = styled('nav', {
	background: "$grey0",
	borderBottom: "2px solid $brand1",
	position: "fixed",
	inset: 0,
	bottom: "auto",
	padding: "1rem 0",
	width: "100%",
	zIndex: "99999",

	[`& ${ Container }`]: {
		display: "flex",
		justifyContent: "space-between",
		"@mobile": {
			flexDirection: "column"
		},
	},
})

const LogoTipo = styled(Flex, {
  	alignItems: "center",
})

const LogoTipoText = styled('span', {
	fontSize: "1.25rem",
	fontWeight: 600,
	color: "$grey4",
	fontFamily: '"IBM Plex Sans"',
	"@mobile": {
		fontSize: "1rem",
	}
})

const NavbarLinks = styled(Flex, {
	"@mobile": {
		marginTop: "$3",
		flexDirection: "column",
		alignItems: "flex-start",
		[`& ${Button}`]: {
		width: "100%",
		justifyContent: "flex-start",
		paddingLeft: 0
		},
	},
})

const NavbarMobileArea = styled('div', {
	display: "flex",
	justifyContent: "space-between"
})

export { Navbar, LogoTipo, LogoTipoText, NavbarLinks, NavbarMobileArea }
