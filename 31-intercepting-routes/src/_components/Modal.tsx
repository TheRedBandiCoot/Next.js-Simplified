"use client";

import { MouseEvent, useEffect, useRef } from "react";

export default function Modal({
  isOpen,
  children,
  onClose,
}: {
  isOpen?: boolean;
  children: React.ReactNode;
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDialogElement>(null);

  function handleModal(e: MouseEvent<HTMLDialogElement>) {
    const modalRec = modalRef.current?.getBoundingClientRect();
    if (
      e.clientY < modalRec?.top! ||
      e.clientY > modalRec?.bottom! ||
      e.clientX < modalRec?.left! ||
      e.clientX > modalRec?.right!
    ) {
      modalRef.current?.close();
      onClose();
    }
  }

  useEffect(() => {
    if (isOpen) modalRef.current?.showModal();
  }, []);

  return (
    <dialog ref={modalRef} onClick={handleModal}>
      {children}
    </dialog>
  );
}
