import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      id: string;
      name?: string | null;
      email?: string | null;
      role?: "Specialist" | "User";
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    role?: "Specialist" | "User";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role?: "Specialist" | "User";
  }
}
