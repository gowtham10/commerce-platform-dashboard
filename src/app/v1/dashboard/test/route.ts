import { NextApiResponse } from "next";

export async function GET(req: Request, _res: NextApiResponse) {
  let responseStream = new TransformStream();
  const writer = responseStream.writable.getWriter();
  const encoder = new TextEncoder();

  setTimeout(async () => {
    await writer.write(
      encoder.encode("data: " + new Date().toLocaleDateString() + "\n\n"),
    );
  }, 0);

  const interval = setInterval(async () => {
    await writer.write(
      encoder.encode("data: " + new Date().toLocaleTimeString() + "\n\n"),
    );
  }, 10000);

  req.signal.addEventListener("abort", () => {
    clearInterval(interval);
  });

  return new Response(responseStream.readable, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/event-stream;charset=UTF-8",
      Connection: "keep-alive",
      "Cache-Control": "no-cache, no-transform",
      "X-Accel-Buffering": "no",
      "contnet-enconding": "none",
    },
  });
}

export const runtime = "edge";
