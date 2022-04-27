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
} from '@chakra-ui/react'
import React  from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { apiCallPet } from '../../Redux/Pet/Action'
export function PetModel() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {addressDetails} = useSelector((store)=> store.details)
    const { loginData } = useSelector((store)=> store.login)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleSubmitPet = (e)=> {
        e.preventDefault();
        let obj = {
            petImg : document.getElementById('petImg').value,
            petWeight : document.getElementById('petWeight').value,
            type : document.getElementById('type').value,
            petName : document.getElementById('petName').value,
            userId : [loginData._id , id]
        }
        dispatch(apiCallPet(obj))
        onClose()
    }
    return (
        <>
        <Button onClick={onOpen} mt={4}>Register Pet</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Pet Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <form onSubmit={handleSubmitPet}>
                    <FormControl>
                        <FormLabel htmlFor='petName'>Enter Pet name</FormLabel>
                        <Input id='petName' type='text' placeholder='First name' required={true}/>
                    </FormControl>
                    <FormControl mt={5}>
                        <FormLabel htmlFor='petImg'>Img Url</FormLabel>
                        <Input id='petImg' type='text' placeholder='Pet image'  required={true}/>
                    </FormControl> 
                    <FormControl mt={5}>
                        <FormLabel htmlFor='petWeight'>Select Weight From Given Range</FormLabel>
                        <Select id='petWeight' placeholder='Select type'  required={true}>
                            {
                                addressDetails.petSize && addressDetails.petSize.map((item)=> (
                                    <option key={item} value={item}>{item}</option>
                                ))
                            }
                        </Select>
                    </FormControl> 
                    <FormControl mt={5}>
                        <FormLabel htmlFor='type'>Category</FormLabel>
                        <Select id='type' placeholder='Select type'  required={true}>
                            {
                                addressDetails.type && addressDetails.type.map((item)=> (
                                    <option key={item} value={item}>{item}</option>
                                ))
                            }
                        </Select>
                    </FormControl>
                <HStack mt={5}>
                    <Button type='submit'  variant='solid' colorScheme="teal" p={4}>
                        Submit
                    </Button>
                    <Button colorScheme='blue' ml={3} onClick={onClose}>
                        Close
                    </Button>
                </HStack>
                </form>
            </ModalBody>
        </ModalContent>
        </Modal>
        </>
    )
}