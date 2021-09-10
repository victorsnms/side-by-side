import { Box, VStack, Icon, Text } from "@chakra-ui/react"
import {
    BiHome, 
    BiBookOpen, 
    BiMap, 
    BiGroup,
    BiTrophy
} from 'react-icons/bi'
import { Link } from "react-router-dom"



export const DashboardMenu = () => {
    return <Box 
        p='4'
        w='125px'
        position='fixed'
        left='0'
        bottom='0'
        bg='green.400'
        color='white'
        h='100%'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
    >
        <Box 
            position='absolute'
            top='1rem'
            left='50%'
            transform='translateX(-50%)'
        >
            <Text fontSize='2rem'>Logo</Text>
        </Box>
        <VStack spacing='5'>
            <Box textAlign='center' as={Link} to='/dashboard'>
                <Icon fontSize='3xl' as={BiHome}/>
                <Text>Home</Text>
            </Box>
            <Box textAlign='center' as={Link} to='/dashboard/info'>
                <Icon fontSize='3xl' as={BiBookOpen}/>
                <Text>Info</Text>
            </Box>
            <Box textAlign='center' as={Link} to='/dashboard/map'>
                <Icon fontSize='3xl' as={BiMap}/>
                <Text>Map</Text>
            </Box>
            <Box textAlign='center' as={Link} to='/dashboard/events'>
                <Icon fontSize='3xl' as={BiGroup}/>
                <Text>Events</Text>
            </Box>
            <Box textAlign='center' as={Link} to='/dashboard/badges'>
                <Icon fontSize='3xl' as={BiTrophy}/>
                <Text>Badges</Text>
            </Box>
        </VStack>
    </Box>
}