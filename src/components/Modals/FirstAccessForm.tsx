import { 
    Flex, 
    Box, 
    Heading, 
    Text, 
    Icon,
    Slide,
    useDisclosure
} from "@chakra-ui/react"
import { Input } from "../Input"
import { MdLocationOn } from 'react-icons/md'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ButtonForms } from "../ButtonForms"
import { IoIosArrowDown } from 'react-icons/io'

const formSchema = yup.object().shape({
    postCode: yup.string().required(),
    streetName: yup.string().required(),
    streetNumber: yup.string().required().matches(/^\d+$/),
    cityOrState: yup.string().required(),
})

interface IFormData {
    postCode: string
    streetName: string
    streetNumber: string
    cityOrState: string
}

export const FirstAccessForm = () => {
    const { 
        register, 
        handleSubmit,
        formState: { errors } 
    } = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSubmit = (data: IFormData) => {
        console.log(data)
        onToggle()
    }

    const {isOpen, onToggle} = useDisclosure()


    return <>
        <button onClick={onToggle}>click</button>
        {isOpen && <Box 
            bg='rgba(72, 135, 136, 0.5)' 
            w='100%' 
            h='100vh' 
            position='absolute' 
            top='0' 
            left='0'
        ></Box>}
        <Slide in={isOpen} direction='bottom' style={{ zIndex: 10 }}>
            <Flex 
                as='form' 
                flexDirection='column' 
                alignItems='center'
                zIndex='10' 
                gridGap='1rem'
                p='1rem 1rem 3rem'
                w='90%'
                bg='white'
                m={['0 auto 67px', '0 auto 67px', '0 auto']}
                maxW='500px'
                borderRadius='1rem 1rem 0 0'
                onSubmit={handleSubmit(onSubmit)}
                
            >
                <Box w='100%' textAlign='right'>
                    <Icon 
                        mr='0.5rem' 
                        as={IoIosArrowDown}
                        onClick={onToggle}
                    />
                </Box>
                <Box>
                    <Heading fontSize='1.5rem' textAlign='center'>
                        WHATS YOUR ADDRESS?
                    </Heading>
                    <Text 
                        color='gray.200' 
                        fontSize='1rem'
                        textAlign='center'
                        w='75%'
                        m='0 auto'
                    >
                        This is important to define the collection points closest to you
                    </Text>
                </Box>   
                <Box w='80%'> 
                    <Input 
                        {...register('postCode')}
                        name='postCode' 
                        placeholder='Post Code' 
                        icon={MdLocationOn}
                        error={errors.postCode}
                    />
                </Box>
                <Box w='80%'> 
                    <Input 
                        {...register('streetName')}
                        name='streetName' 
                        placeholder='Street name' 
                        icon={MdLocationOn}
                        error={errors.streetName}
                    />
                </Box>
                <Box w='80%'> 
                    <Input 
                        {...register('streetNumber')}
                        name='streetNumber' 
                        placeholder='Street number' 
                        icon={MdLocationOn}
                        error={errors.streetNumber}
                    />
                </Box>
                <Box w='80%'> 
                    <Input 
                        {...register('cityOrState')}
                        name='cityOrState' 
                        placeholder='City/State' 
                        icon={MdLocationOn}
                        error={errors.cityOrState}
                    />
                </Box>
                <ButtonForms mt='2rem' type='submit' width={['90%']}>Add</ButtonForms>
            </Flex> 
        </Slide>
    </>
}