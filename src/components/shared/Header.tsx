import { Flex, Heading, Image } from "@aws-amplify/ui-react"
import image from 'clockwork.svg'

export const Header = () => {
    return (

        <Flex   direction="flex-start" alignItems='center'>
            <Heading>
                Wannabe
            </Heading>
            <Image alt='clockwork' src={image} />
        </Flex>

    )
}