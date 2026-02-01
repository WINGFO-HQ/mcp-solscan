import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerTools } from "./tools.js";

const server = new McpServer({
  name: "Solscan MCP",
  version: "1.0.0",
});

registerTools(server);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Solscan MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main loop:", error);
  process.exit(1);
});
