"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/primitives/Button";

export default function EmailSignInButton() {
  return (
  <Button variant="outlinePrimary" onClick={() => signIn("email")}>Sign in with Email</Button>
  );
}
