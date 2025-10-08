'use client';

import { useState, useEffect, useRef } from 'react';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';

export function useMcpClient() {
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState('');
  const clientRef = useRef<Client | null>(null);

  useEffect(() => {
    const initClient = async () => {
      try {
        if (typeof window === 'undefined') return;

        const client = new Client({
          name: 'nextjs-mcp-client',
          version: '1.0.0',
        });

        const transport = new StreamableHTTPClientTransport(
          new URL('/api/mcp', window.location.origin)
        );

        await client.connect(transport);
        clientRef.current = client;
        setIsConnected(true);
        console.log('✅ MCP client connected');
      } catch (err) {
        console.error('❌ Connection error:', err);
        setError(`Failed to connect: ${err instanceof Error ? err.message : 'Unknown error'}`);
      }
    };

    initClient();

    return () => {
      if (clientRef.current) {
        try {
          clientRef.current.close();
        } catch (err) {
          console.error('Error closing client:', err);
        }
      }
    };
  }, []);

  const callTool = async (name: string, args: Record<string, unknown>) => {
    if (!clientRef.current) {
      setResult('Client not connected');
      return;
    }

    try {
      setResult('Calling tool...');
      const response = (await clientRef.current.callTool({
        name,
        arguments: args,
      })) as { content: { type: string; text?: string }[] };

      const text =
        response.content[0]?.type === 'text'
          ? response.content[0].text
          : JSON.stringify(response, null, 2);

      setResult(text ?? '');
    } catch (err) {
      console.error('❌ MCP Error:', err);
      setResult(`Error: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
  };

  return { isConnected, error, result, callTool };
}
