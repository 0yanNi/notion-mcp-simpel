import { createMcpHandler } from "mcp-handler";
import { z } from "zod";

const handler = createMcpHandler((server) => {
  server.registerTool(
    "buat_salam",
    {
      title: "Buat Salam",
      description: "Membuat salam untuk seseorang",
      inputSchema: z.object({
        nama: z.string().describe("Nama orang yang akan disapa"),
      }),
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

  server.registerTool(
    "hitung_penjumlahan",
    {
      title: "Hitung Penjumlahan",
      description: "Menjumlahkan dua angka",
      inputSchema: z.object({
        angkaPertama: z.number().describe("Angka pertama"),
        angkaKedua: z.number().describe("Angka kedua"),
      }),
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
});

export { handler as GET, handler as POST };
