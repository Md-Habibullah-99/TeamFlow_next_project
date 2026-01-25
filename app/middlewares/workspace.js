import { base } from "../middlewares/base";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

/**
 * Middleware to ensure the user is part of an organization/workspace.
 */
export const requiredWorkspaceMiddleware = base
  .$context()
  .middleware(async ({ context, next, errors }) => {
    // Check if workspace exists in current context, otherwise fetch it
    const workspace = context.workspace ?? (await getWorkspace());

    if (!workspace) {
      // Throw the oRPC FORBIDDEN error defined in your base middleware
      throw errors.FORBIDDEN();
    }

    return next({
      context: { workspace }
    });
  });

/**
 * Helper to fetch the current Kinde Organization (workspace)
 */
const getWorkspace = async () => {
  const { getOrganization } = getKindeServerSession();
  const organization = await getOrganization();
  return organization;
};