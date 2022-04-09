import { Box, Center, Image, Flex, Badge, Text } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";

export const Rest = ({data}) =>{
   
  return (
      <>
       {data.map((e)=>(
        <div style={{ display: "flex", gap: "1rem" }} key={e.id}>
        <Center h="50vh">
       <Box p="5" maxW="320px" borderWidth="1px">
         <Image borderRadius="md" src={e.image} />
         <Flex align="baseline" mt={2}>
           <Badge colorScheme="pink">{e.id}</Badge>
           <Text
             ml={2}
             textTransform="uppercase"
             fontSize="sm"
             fontWeight="bold"
             color="pink.800"
           >
           votes:{e.votes}     reviews:{e.reviews}
           </Text>
         </Flex>
         <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
           
           {e.name}
         </Text>
         <Text mt={2}>cost_for_one : {e.cost_for_one}</Text>
         <Text mt={2}>cost_for_two : {e.cost_for_two}</Text>
         <Flex mt={2} align="center">
           <Box as={MdStar} color="orange.400" />
           <Text ml={1} fontSize="sm">
             <b>{e.rating}</b> (190)
           </Text>
         </Flex>
       </Box>
       </Center>
         </div>
               ))}
      </>
    
  )

}