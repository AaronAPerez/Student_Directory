import { AddIcon, EditIcon, DeleteIcon, ViewIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Button, TableContainer, Table, Thead, Tr, Th, Tbody, Td, HStack, Avatar, Badge, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ColorModeSwitch from './ColorModeSwitch';


interface Student {
    // price: number;
    id: number;
    name: string;
    description: string;
    // isInStore: boolean;
}


const StudentTable = () => {

    const [data,setData] = useState<Student[]>([]);
    const [isLoading, setisLoading] = useState<boolean>(false);
    const [error, setError] = useState("");

    const fetchData = () => {
        setisLoading(true)
        axios
            .get(BASE_URL + "Student")
            .then(response => {
                setData(response.data)
            }).catch(error => {
                console.log(error);
                setError(error);

            }).finally(() => {
                setisLoading(false)
            })
    }

    useEffect(() => {
      
        fetchData();
    }, [])

    if(isLoading) return <ProductSkeleton/>
    

  return (
    <>

            <ColorModeSwitch />
            <Box m={12} shadow={'md'} rounded={'md'}>
                <Flex justifyContent={'space-between'} px={'5'}>
                    <Heading>
                        Student List
                    </Heading>
                    <Button color="teal.300" leftIcon={<AddIcon/>}>
                    Add Student
                    </Button>
                    {/* <Button color="teal.300" leftIcon={<AddIcon/>}> */}
                </Flex>




                <TableContainer>
                    <Table variant='striped' colorScheme='teal'>
                       
                        <Thead>
                            <Tr>
                                <Th>Id</Th>
                                <Th>Name</Th>
                                {/* <Th>Is In Stock</Th>
                                <Th isNumeric>Price</Th> */}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                data.map((student: Student) => (
                                    <Tr key={student.id}>
                                        <Td>{student.id}</Td>
                                        <Td>
                                            <HStack>
                                                <Avatar name={student.name}/>
                                                <Text>{student.name}</Text>
                                            </HStack>
                                        </Td>

                                        <Badge color="teal.300">Yes</Badge>



                                        <Td>{student.description}</Td>
                                        {/* <Td>{student.isInStore}</Td>
                                        <Td>{student.price}</Td> */}
                                        <HStack>
                                            <EditIcon boxSize={23} color={"orange.200"}/>
                                            <DeleteIcon boxSize={23} color={"red.300"}/>
                                            <ViewIcon boxSize={23} color={"blue.200"}/>
                                        </HStack>
                                    </Tr>
                                ))}
                        </Tbody>
              
                    </Table>
                </TableContainer>
                {data.length == 0 && <Heading fontSize={24}>No Data</Heading>}

            </Box>


    </>
  )
}

export default StudentTable