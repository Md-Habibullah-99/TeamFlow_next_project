import { os } from '@orpc/server'

export const base = os.$context().errors({
  RATE_LIMITED: {
    massage: "You are being rate limited.",
  },
  BAD_REQUEST: {
    massage: "Bad request.",
  },
  NOT_FOUND: {
    massage: "Not Found.",
  },
  FORBIDDEN: {
    massage: "Ths is forbidden.",
  },
  UNAUTHORIZED: {
    massage: "You are Unauthorized.",
  },
  INTERNAL_SERVER_ERROR: {
    massage: "Internal Server Error.",
  }
})