import { styled } from '@/styles/stitches.config'


const ContactSection = styled('section', {
	background: "$grey1",
	padding: "$section 0",
	"@mobile": {
		padding: "$sectionMobile 0",
	},
})

const ContactSectionContent = styled('div', {
	display: "flex",
	justifyContent: "space-between",
	"@mobile": {
		flexDirection: "column"
	},
})

const ContactSectionText = styled('aside', {
	maxWidth: "26.25rem",
	display: "grid",
	gridGap: "$2",
	height: "max-content",
	position: "sticky",
	top: "8rem",
	"@mobile": {
		position: "static",
		marginBottom: "$5"
	},
})

const ContactCard = styled('div', {
	width: "100%",
	display: "flex",
	paddingRight: "10rem",
	marginBottom: "6rem",
	["& a"]:{
		"&:hover":{
			color: "$grey4",
			cursor: "pointer"
		}
	},
	"@mobile": {
		paddingRight: "0",
	},
})

const ContactsCards = styled('div', {
	display: "flex",
	flexDirection: "column",
	width: "50%",
	"@mobile": {
		width: "100%",
	},
})

const ContactCardContent = styled("div", {
	display: "grid",
	gridGap: "$2",
})

const ContactCardImage = styled('div', {
	minWidth: "4.5rem",
	height: "4.5rem",
	marginRight: "$2",
	borderRadius: "$1",
	backgroundColor: "$grey0",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",

	["&.wpp"]: {
		background: "linear-gradient(180deg, #50C571 0%, #50CF9A 100%)",
	},
	["&.email"]: {
		background: "linear-gradient(180deg, #BD3B9B 0%, #EE5BC7 100%)",
	},
	["&.linkedin"]: {
		background: "linear-gradient(180deg, #4E73FF 0%, #506CCF 100%)",
	}
})

export { ContactSection, ContactSectionContent, ContactSectionText, ContactCard, ContactsCards, ContactCardContent, ContactCardImage }
