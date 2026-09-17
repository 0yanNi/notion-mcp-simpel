import { createMcpHandler } from "mcp-handler";
import { z } from "zod";

const handler = createMcpHandler(
  (server) => {
    server.tool(
      "buat_salam",
      "Membuat salam untuk seseorang",
      {
        nama: z.string().describe("Nama orang yang akan disapa"),
      },
      async ({ nama }) => {
        return {
          content: [
            {
              type: "text",
              text: `Halo ${nama}! Salam dari MCP buatanmu di Vercel.`,
            },
          ],
        };
      },
    );

    server.tool(
      "hitung_penjumlahan",
      "Menjumlahkan dua angka",
      {
        angkaPertama: z.number().describe("Angka pertama"),
        angkaKedua: z.number().describe("Angka kedua"),
      },
      async ({ angkaPertama, angkaKedua }) => {
        const hasil = angkaPertama + angkaKedua;

        return {
          content: [
            {
              type: "text",
              text: `${angkaPertama} + ${angkaKedua} = ${hasil}`,
            },
          ],
        };
      },
    );
  },
  {},
  {
    basePath: "/api",
  },
);

export { handler as GET, handler as POST, handler as DELETE };
