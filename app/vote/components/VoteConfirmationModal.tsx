'use client'
import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";

export default function VoteConfirmationModal(props: any) {
  

  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();

  let [isVoteBtnDisabled, setIsVoteBtnDisabled] = useState(false)
  
  function validateVote () {
    console.log('Vote validaté !')
    setIsVoteBtnDisabled(true)

    setTimeout(() => {
      setIsVoteBtnDisabled(true)
      onClose()
    }, 1000);
  }

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement={"center"}

        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -40,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            }
          }
        }}
        >
        <ModalContent>
          {(onClose: any) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Annuler
                </Button>
                <Button color="primary" isDisabled={isVoteBtnDisabled} onPress={validateVote}>
                  Voter
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
