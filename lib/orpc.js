import { RPCLink } from "@orpc/client/fetch";
import { createORPCClient } from "@orpc/client";
import { router } from "@/app/router";
import { createTanstackQueryUtils } from "@orpc/tanstack-query"

// Configuration for the RPC link
const link = new RPCLink({
  url: () => {
    // Safety check: ensure this runs in a browser environment
    if (typeof window === "undefined") {
      throw new Error("RPCLink is not allowed on the server side.");
    }
    
    return `${window.location.origin}/rpc`;
  },
});

/**
 * Fallback to the existing global $client if it exists,
 * otherwise initialize a new ORPC client using the link above.
 */
export const client = globalThis.$client ?? createORPCClient(link);

export const orpc = createTanstackQueryUtils(client);
/* 
import type { RouterClient } from "@orpc/server";
import { RPLink } from "@orpc/client/fetch";
import { createORPCClient } from "@orpc/client";
import { router } from "@/app/router";

declare global {
  var $client: RouterClient<typeof router> | undefined;
}

const link = new RPCLink({
  url: () => {
    if (typeof window === "undefined") {
      throw new Error("RPCLink is not allowed on the server side.");
    }
    
    return `${window.location.origin}/rpc`;
  },
});

export const client: RouterClient<typeof router> = global.$client ?? createORPCClient(link);
*/