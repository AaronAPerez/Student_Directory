import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';



interface StudentFormProps{
    isOpen: boolean;
    onClose: () => void
}

const StudentForm = ({isOpen,onClose}:StudentFormProps) => {


  return (
    <>


      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>

            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default StudentForm