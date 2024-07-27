import { AddIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, Flex, Heading, HStack, Skeleton, SkeletonCircle, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react'




interface Student {
    id: number;
    name: string;
    // price: number;
    description: string;
    // isInStore: boolean;
}

const StudentSkeleton = () => {


  return (
    <>

      <Box m={32} shadow={"md"} rounded={"md"}>
        <Flex justifyContent={"space-between"} px={"5"}>
          <Heading>
            <Skeleton>Student List</Skeleton>
          </Heading>
          <Button color="cyan.300" leftIcon={<AddIcon />}>
              {" "}
             <Skeleton>Add Student</Skeleton>
          </Button>
        </Flex>

        <TableContainer>
            <Table variant="striped" colorScheme="cyan">
            
              <Thead>
                <Tr>
                  <Th><Skeleton>Id</Skeleton></Th>
                  <Th><Skeleton>Name</Skeleton></Th>
                  <Th><Skeleton>Description</Skeleton></Th>
                  {/* <Th><Skeleton>IsinStock</Skeleton></Th> */}
                  {/* <Th isNumeric><Skeleton>Price</Skeleton></Th> */}
                </Tr>
              </Thead>
              <Tbody>
                {Array.from({length:5}).map((_,index) => (
                  <Tr key={index}>
                    <Td><Skeleton>01</Skeleton></Td>
                    <Td>
                      <HStack>
                        <SkeletonCircle>AD</SkeletonCircle>
                        <Text><Skeleton>Student Name</Skeleton></Text>
                      </HStack>
                    </Td>
  
                  
                    <Td><Skeleton>Student Description</Skeleton></Td>
                    <Td>
  
                      <Badge><Skeleton>Yes</Skeleton></Badge>
                    </Td>
                    <Td><Skeleton>1234343</Skeleton></Td>
                    <Td>
                      <HStack>
                        <SkeletonCircle>1</SkeletonCircle>
                        <SkeletonCircle>1</SkeletonCircle>
                        <SkeletonCircle>1</SkeletonCircle>
                      </HStack>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
              
            </Table>
          </TableContainer>

      </Box>
    </>
  );
};

export default StudentSkeleton;