# MCP Next.js Demo

A simple **MCP (Model Context Protocol) server** built with **Next.js** and **TypeScript** and **mcp-handler** that exposes multiple interactive tools via a standardized JSON-RPC API.
This project demonstrates how to build, expose, and call micro-tools that can be connected to ChatGPT or any LLM supporting MCP.

---

## Features

Currently, the server includes the following tools:

1. **Roll Dice** – Roll an N-sided die.  
2. **Say Hello**  – Returns a greeting message.  
3. **Add Numbers**  – Adds two numbers.  
4. **Random Number**  – Generates a random number between a given min and max.  
5. **Random Quote**  – Returns a motivational quote.  
6. **Emoji Reaction**  – Responds with a random emoji.  
7. **Color Palette**  – Generates a random color palette.  
8. **Horoscope**  – Returns a fun horoscope for a zodiac sign.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sattarrasouli/MCP-Next.js.git

# get to the directory
cd MCP-Next.js
```
## 2. Install dependencies
```
npm install
```
## 3. Run the development server
```
npm run dev
```
## The MCP API will be available at:
```
http://localhost:3000/api/mcp
```

---

## API Usage

Each MCP tool can be called using JSON-RPC 2.0 format.  
Use either Postman or curl to send requests.

### Base Format

```json
{
  "jsonrpc": "2.0",
  "id": "1",
  "method": "tools/call",
  "params": {
    "name": "tool_name",
    "arguments": { }
  }
}
```

## Example Calls

### Roll Dice 
#### Postman Body:
```json
{
  "jsonrpc": "2.0",
  "id": "1",
  "method": "tools/call",
  "params": {
    "name": "roll_dice",
    "arguments": { "sides": 6 }
  }
}
```
#### curl:
```bash
curl -X POST http://localhost:3000/api/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json,text/event-stream" \
  -d '{
    "jsonrpc": "2.0",
    "id": "1",
    "method": "tools/call",
    "params": { "name": "roll_dice", "arguments": { "sides": 6 } }
  }'
```

### Say Hello 
#### Postman Body:
```json
{
  "jsonrpc": "2.0",
  "id": "2",
  "method": "tools/call",
  "params": {
    "name": "say_hello",
    "arguments": { "name": "Sattar" }
  }
}
```

#### curl:
```bash
curl -X POST http://localhost:3000/api/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json,text/event-stream" \
  -d '{
    "jsonrpc": "2.0",
    "id": "2",
    "method": "tools/call",
    "params": { "name": "say_hello", "arguments": { "name": "Sattar" } }
  }'
```


### Add Numbers 
#### Postman Body:
```json
{
  "jsonrpc": "2.0",
  "id": "3",
  "method": "tools/call",
  "params": {
    "name": "add_numbers",
    "arguments": { "a": 10, "b": 15 }
  }
}
```

#### curl:
```bash
curl -X POST http://localhost:3000/api/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json,text/event-stream" \
  -d '{
    "jsonrpc": "2.0",
    "id": "3",
    "method": "tools/call",
    "params": { "name": "add_numbers", "arguments": { "a": 10, "b": 15 } }
  }'
```



### Random Number 
#### Postman Body:
```json
{
  "jsonrpc": "2.0",
  "id": "4",
  "method": "tools/call",
  "params": {
    "name": "random_number",
    "arguments": { "min": 5, "max": 15 }
  }
}
```

#### curl:
```bash
curl -X POST http://localhost:3000/api/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json,text/event-stream" \
  -d '{
    "jsonrpc": "2.0",
    "id": "4",
    "method": "tools/call",
    "params": { "name": "random_number", "arguments": { "min": 5, "max": 15 } }
  }'
```


### Random Quote
#### Postman Body:
```json
{
  "jsonrpc": "2.0",
  "id": "5",
  "method": "tools/call",
  "params": { "name": "random_quote", "arguments": {} }
}
```

#### curl:
```bash
curl -X POST http://localhost:3000/api/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json,text/event-stream" \
  -d '{
    "jsonrpc": "2.0",
    "id": "4",
    "method": "tools/call",
    "params": { "name": "random_quote", "arguments": {} }
  }'
```


### Emoji Reaction
#### Postman Body:
```json
{
  "jsonrpc": "2.0",
  "id": "6",
  "method": "tools/call",
  "params": { "name": "emoji_reaction", "arguments": {} }
}
```

#### curl:
```bash
curl -X POST http://localhost:3000/api/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json,text/event-stream" \
  -d '{
    "jsonrpc": "2.0",
    "id": "4",
    "method": "tools/call",
    "params": { "name": "emoji_reaction", "arguments": {} }
  }'
```



### Color Palette
#### Postman Body:
```json
{
  "jsonrpc": "2.0",
  "id": "7",
  "method": "tools/call",
  "params": {
    "name": "color_palette",
    "arguments": { "count": 5 }
  }
}
```

#### curl:
```bash
curl -X POST http://localhost:3000/api/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json,text/event-stream" \
  -d '{
    "jsonrpc": "2.0",
    "id": "4",
    "method": "tools/call",
    "params": { "name": "color_palette", "arguments": { "count": 5 } }
  }'
```




### Horoscope
#### Postman Body:
```json
{
  "jsonrpc": "2.0",
  "id": "8",
  "method": "tools/call",
  "params": {
    "name": "horoscope",
    "arguments": { "sign": "Leo" }
  }
}
```

#### curl:
```bash
curl -X POST http://localhost:3000/api/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json,text/event-stream" \
  -d '{
    "jsonrpc": "2.0",
    "id": "4",
    "method": "tools/call",
    "params": { "name": "horoscope", "arguments": { "sign": "Leo" } }
  }'
```


### Example Response
#### For any valid call, the response will look like:
```json
{
  "jsonrpc": "2.0",
  "id": "1",
  "result": {
    "content": [
      { "type": "text", "text": "🎲 You rolled a 5!" }
    ]
  }
}
```
