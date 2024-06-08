"use client";
import LoginForm from "@/_components/LoginForm";
import Modal from "@/_components/Modal";
import { useRouter } from "next/navigation";
import React from "react";

export default function loginPage() {
  const router = useRouter();
  return (
    <Modal isOpen onClose={() => router.back()}>
      <h1>log In</h1>
      <LoginForm />
      <div style={{ height: "5rem" }}></div>
    </Modal>
  );
}
