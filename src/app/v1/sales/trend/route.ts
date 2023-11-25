import {
  constructSalesTrendMockData,
  readJsonFile,
} from "@/app/shared/mock-helper";
import { MockFileNames } from "@/constants";

const POLLING_INTERVAL = 30000;

export async function GET(req: Request) {
  const mockData = await readJsonFile(
    MockFileNames.HOURLY_SALES_TREND,
  ) as any;

  let responseStream = new TransformStream();
  const writer = responseStream.writable.getWriter();
  const encoder = new TextEncoder();

  setTimeout(async () => {
    const data = {
      ...await constructSalesTrendMockData(mockData),
    };
    await writer.write(
      encoder.encode(
        "data: " + JSON.stringify({ ...data }) + "\n\n",
      ),
    );
  }, 0);

  const interval = setInterval(async () => {
    const data = {
      ...await constructSalesTrendMockData(mockData),
    };
    await writer.write(
      encoder.encode(
        "data: " +
          JSON.stringify({ ...data }) + "\n\n",
      ),
    );
  }, POLLING_INTERVAL);

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

