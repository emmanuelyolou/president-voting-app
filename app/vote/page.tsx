"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { FaCheck } from "react-icons/fa6";

export default function Vote() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  let [isVoteBtnDisabled, setIsVoteBtnDisabled] = useState(false);

  const candidates = [
    { firstName: "Levi", lastName: "N'GBESSO", id: 1, imgName: "man" },
    { firstName: "Jean-Bosco", lastName: "YAO", id: 2, imgName: "woman" },
    { firstName: "Berassou", lastName: "KOFFI", id: 3, imgName: "max" },
    { firstName: "DIAMANT", lastName: "CHERIF", id: 4, imgName: "aiony" },
  ];

  // When the user clicks "vote" for a candidate, the candidate info should be displayed
  let [selectedCandidate, setSelectedCandidate] = useState({
    firstName: "",
    lastName: "",
    id: 0,
    imgName: "",
  });

  function validateVote() {
    console.log(
      "Vote validaté ! Vous avez voté " + selectedCandidate.firstName
    );
    setIsVoteBtnDisabled(true);

    setTimeout(() => {
      setIsVoteBtnDisabled(false);
      onClose();
    }, 1000);
  }

  function chooseCandidate(candidate: any) {
    setSelectedCandidate(candidate);
    onOpen();
  }

  return (
    <main>
      {/* <VoteConfirmationModal isOpen={isOpen} name={12}/> */}
      <section className="container mx-auto px-4">
        <h1 className="mt-14">Choisissez votre Président</h1>
        <p className="text-slate-600 text-xl mt-5">
          Lequel de ces candidats correspond le plus à ce que vous attendez du
          Président de l’IDSI ?
        </p>

        {/* CANDIDATE VOTE CARD */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-14 gap-4 gap-y-8">
          {candidates.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col items-center rounded-3xl shadow-md overflow-hidden">
                <div className="w-full flex justify-center bg-gray-200">
                  <img
                    src={`images/${item.imgName}.jpg`}
                    alt="Candidat 1"
                    className="h-60 bg-black"
                  />
                </div>
                <Button
                  className="btn btn-primary my-4"
                  onPress={() => chooseCandidate(item)}
                >
                  Voter
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement={"center"}
          isDismissable={false}
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
              },
            },
          }}
        >
          <ModalContent>
            {(onClose: any) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Voter{" "}
                  {selectedCandidate.lastName +
                    " " +
                    selectedCandidate.firstName}{" "}
                  ?
                </ModalHeader>
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
                  <Button
                    color="primary"
                    isDisabled={isVoteBtnDisabled}
                    onPress={validateVote}
                  >
                    Confirmer
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </main>
  );
}
