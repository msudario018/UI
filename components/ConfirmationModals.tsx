import { Box, ButtonText, Center, Heading } from "@gluestack-ui/themed";
import { Button, CloseIcon, Icon, Modal, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Text } from "@gluestack-ui/themed";
import { createContext, useContext, useState } from "react";
/*
const ConfirmationModalContext = createContext({});
const useConfirmationModal = useContext(ConfirmationModalContext);
export const ConfirmationModalProvider = ({children}) => {
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    const displayConfirmationModal = () => {setShowConfirmationModal(true)};
    const closeConfirmationModal = () =>{setShowConfirmationModal(false)};

    return(
        <ConfirmationModalContext.Provider value={{showConfirmationModal, displayConfirmationModal, closeConfirmationModal}}>
            {children}
        </ConfirmationModalContext.Provider>
    );
}*/

export const ConfirmationModal = ({display}) => {
    const {showConfirmationModal, closeConfirmationModal} = useConfirmationModal();
    console.log("modal entry");

    return (
        <Modal isOpen={showConfirmationModal}>
            <ModalBackdrop />
            <ModalContent>
                <ModalHeader>
                    <Box width={"$full"} alignItems="center">
                        <Heading size="lg">
                            {'Are you sure?'}
                        </Heading>
                    </Box>
                </ModalHeader>
                <ModalBody>
                    <Text>
                        {'Exiting the sign-up process will result in the deletion of all your information.'}
                    </Text>
                </ModalBody>
                <ModalFooter>
                    <Button
                        variant="outline"
                        size="sm"
                        action="secondary"
                        mr="$3"
                        onPress={() => {setShowModal(false);}}
                    >
                        <ButtonText>Cancel</ButtonText>
                    </Button>
                    <Button
                        size="sm"
                        action="positive"
                        borderWidth="$0"
                        onPress={() => { 

                            setShowModal(false);
                        }}
                    >
                        <ButtonText>Explore</ButtonText>
                    </Button>
                </ModalFooter>
            </ModalContent>

        </Modal>
    );
}
*/