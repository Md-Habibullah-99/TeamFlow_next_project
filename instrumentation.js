export async function register() {
  // Conditionally import if facing runtime comatibility issues
  // if (process.env.NEXT_RUNTIME === 'nodejs') {
  await import("@/lib/orpc.server");
  // }
}