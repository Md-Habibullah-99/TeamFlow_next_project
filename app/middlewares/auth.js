import { base } from "./base";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

/**
 * Middleware to ensure the user is authenticated.
 * It checks the existing context for a session, 
 * otherwise fetches it from Kinde.
 */
export const requiredAuthMiddleware = base.$context().middleware(async ({ context, next }) => {
  const session = context.session ?? (await getSession());

  if (!session.user) {
    // If no user is found, redirect to Kinde login
    return redirect("/api/auth/login");
  }

  // Pass the user into the next context for use in your procedures
  return next({
    context: { 
      user: session.user 
    }
  });
});

/**
 * Helper to fetch the Kinde session
 */
const getSession = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return { user };
};