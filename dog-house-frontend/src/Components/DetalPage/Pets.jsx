import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    useDisclosure,
    ModalBody,
    Button,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Select,
    HStack,
    Box,
    Stack,
    Img,
    Text,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
const Pets = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {addressDetails} = useSelector((store)=> store.details)
    return (
    <>
    <Button onClick={onOpen} mt={4}>Pets</Button>
        <Modal isOpen={isOpen} w='lg' onClose={onClose} p={4}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Pet we has Right now</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
                {
                    addressDetails.Pets && addressDetails.Pets.map((item)=>(
                        <Stack direction={['row', 'column']} align="center" justify="center" mt={4} boxShadow="md" p={3}>
                            <Box boxSize='80%'>
                                <Img  src={item.petImg} alt="pet imges" />
                            </Box>
                            <Box display="flex" justify="space-between" w='100%' direction={['row', 'column']}>
                                <Text>
                                    Type : {item.type} and his/her Name is {item.petName}
                                </Text>
                            </Box>
                        </Stack>
                    ))
                }
                    <Button colorScheme='blue' mt={10} onClick={onClose}>
                        Close
                    </Button>
            </ModalBody>
        </ModalContent>
        </Modal>
    </>
  )
}

export default Pets