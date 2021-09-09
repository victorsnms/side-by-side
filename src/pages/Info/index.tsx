import { Flex, Accordion, VStack, Heading } from "@chakra-ui/react"
import { InfoDropDown } from "../../components/InfoDropDown"
import { infos } from "../../utils/infos"

export const Info = () => {
  return <Flex minH='100vh' h='auto' justifyContent='space-between'>
    <VStack
     bg='red'
     p='5rem'>
      <p>1</p>
      <p>2</p>
      <p>3</p>
    </VStack>
    <Flex 
      
      alignItems='center' 
      p='10'
      w='100%'
      flexDirection='column'
    >
      <Heading 
        as='h2' 
        m='3rem 0 4rem' 
        textTransform='uppercase' 
        fontSize='2xl'
      >Informations</Heading>
      <Accordion 
        w='80%' 
        allowToggle
      >
        {infos.map(({title, content}) => <InfoDropDown w='100%' title={title} content={content}/>)}
      </Accordion>
    </Flex>
  </Flex>
}
