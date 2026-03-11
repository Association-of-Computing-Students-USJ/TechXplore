/**
 * Health check API route
 * GET /api/health
 */
export async function GET() {
  return Response.json({ status: "ok", app: "TechXplore Edition 2.0" });
}
