import dots from '@/public/static/img/background/dots.svg'
import { Container, Flex } from '@/styles/Global'
import { styled } from '@/styles/stitches.config'


const Footer = styled('footer', {
    backgroundColor: "$grey0",
    padding: "7rem 0",
    backgroundImage: `url(${ dots })`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left top 8rem",
    "@mobile": {
        backgroundPosition: "center top 1rem",
    },
    [`& ${ Container }`]:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "@mobile": {
            flexDirection: "column",
            [`& ${ Flex }:first-child`]: {
                marginBottom: "$5",
                flexDirection: "column",
                textAlign: "center",
                [`& img`]: {
                    marginBottom: "$2",
                }
            }
        }
    },
})

export { Footer }
