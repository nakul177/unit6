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
    Box,
    Stack,
    Img,
    Text,
} from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
import { apiCallUpadate } from '../../Redux/Data/Action'
import { useSelector, useDispatch } from 'react-redux'
const Reqs = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {addressDetails} = useSelector((store)=> store.details)
    return (
    <>
    <Button onClick={onOpen} mt={4} mr={5}>All Request</Button>
        <Modal isOpen={isOpen} onClose={onClose} p={4}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Pet we has Right now</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
                {
                    addressDetails.reqPets && addressDetails.reqPets.map((item, index)=>(
                        <Stack key={index} direction={['column', 'row']} align="center" justify="center" mt={4} boxShadow="md" p={3}>
                            <Box boxSize='80%'>
                                <Img  src={item.petImg} alt="pet imges" />
                            </Box>
                            <Box ml={4} spacing={[2,4]}>
                                <Text>
                                    his/her Name is = {item.petName},
                                </Text>
                                <Text>
                                    Type =  {item.type},  
                                </Text>
                                <Text>
                                    Weight : {item.petWeight}
                                </Text>
                                <Button onClick={()=>{
                                    dispatch(apiCallUpadate(addressDetails._id,index))
                                    onClose();
                                    navigate(`/`)
                                }}
                                    mt={10}
                                >
                                    Accept {item.petName}
                                </Button>
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

export default Reqs