import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import SignupCard from "./form"
function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button color="white"
                  variant="outline"
                  backgroundColor="#5034ff" _hover={{ borderColor: "white", border: "2px" }} onClick={onOpen}>Create New Account</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Welcome to Friday.com</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <SignupCard/>
            </ModalBody>
  
            
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default BasicUsage