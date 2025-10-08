import { createMcpHandler } from 'mcp-handler';
import { z } from 'zod';

const handler = createMcpHandler(
  (server) => {
    // Tool 1: Roll Dice
    server.tool(
      'roll_dice',
      'Rolls an N-sided die',
      {
        sides: z.number().int().min(2),
      },
      async ({ sides }) => {
        const value = 1 + Math.floor(Math.random() * sides);
        return {
          content: [{ type: 'text', text: `🎲 You rolled a ${value}!` }],
        };
      }
    );

    // Tool 2: Say Hello
    server.tool(
      'say_hello',
      'Returns a greeting message',
      { name: z.string() },
      async ({ name }) => {
        return {
          content: [{ type: 'text', text: `👋 Hello, ${name}! Welcome to MCP.` }],
        };
      }
    );

    // Tool 3: Add Numbers
    server.tool(
      'add_numbers',
      'Adds two numbers',
      { a: z.number(), b: z.number() },
      async ({ a, b }) => {
        const sum = a + b;
        return {
          content: [{ type: 'text', text: `🧮 ${a} + ${b} = ${sum}` }],
        };
      }
    );

    // Tool 4: Random Number
    server.tool(
      'random_number',
      'Generates a random number between min and max (inclusive)',
      { min: z.number(), max: z.number() },
      async ({ min, max }) => {
        const value = Math.floor(Math.random() * (max - min + 1)) + min;
        return {
          content: [{ type: 'text', text: `🔢 Your random number: ${value}` }],
        };
      }
    );

    // Tool 5: Random Quote
    server.tool('random_quote', 'Returns a random inspirational quote', {}, async () => {
      const quotes = [
        "Believe you can and you're halfway there.",
        'The only way to do great work is to love what you do.',
        'Dream big and dare to fail.',
        'Success is not final, failure is not fatal: it is the courage to continue that counts.',
        'Keep going. Everything you need will come to you.',
      ];
      const idx = Math.floor(Math.random() * quotes.length);
      return {
        content: [{ type: 'text', text: `💡 Quote: "${quotes[idx]}"` }],
      };
    });

    // Tool 6: Emoji Reaction
    server.tool('emoji_reaction', 'Responds with a random emoji reaction', {}, async () => {
      const emojis = ['😃', '👍', '🎉', '🥳', '🚀', '🙌', '😎'];
      const idx = Math.floor(Math.random() * emojis.length);
      return {
        content: [{ type: 'text', text: `Your emoji reaction: ${emojis[idx]}` }],
      };
    });

    // Tool 7: Color Palette
    server.tool(
      'color_palette',
      'Generates a random color palette',
      { count: z.number().int().min(2).max(8) },
      async ({ count }) => {
        function randomHex() {
          return (
            '#' +
            Math.floor(Math.random() * 0xffffff)
              .toString(16)
              .padStart(6, '0')
          );
        }
        const palette = Array.from({ length: count }, randomHex);
        return {
          content: [{ type: 'text', text: `🎨 Your color palette: ${palette.join(', ')}` }],
        };
      }
    );

    // Tool 8: Horoscope
    server.tool(
      'horoscope',
      'Returns a fun horoscope for the given zodiac sign',
      { sign: z.string() },
      async ({ sign }) => {
        const horoscopes: Record<string, string> = {
          aries: 'Today is a great day for bold moves. Trust your instincts!',
          taurus: 'Patience will reward you. Stay steady and enjoy the moment.',
          gemini: 'Embrace new conversations and connections.',
          cancer: 'Take time for self-care and nurture your close relationships.',
          leo: 'Let your confidence shine and take the spotlight.',
          virgo: 'Your attention to detail pays off—organize your plans.',
          libra: 'Seek harmony and balance in your interactions.',
          scorpio: 'Trust your intuition and dive deep into your passions.',
          sagittarius: 'Adventure awaits! Explore something new.',
          capricorn: 'Hard work brings results. Keep climbing!',
          aquarius: 'Innovative ideas are flowing—share them with others.',
          pisces: 'Let your creativity guide you to new possibilities.',
        };
        const lower = sign.trim().toLowerCase();
        const message =
          horoscopes[lower] ||
          'Please provide a valid zodiac sign (e.g., Aries, Taurus, Gemini, ...)';
        return {
          content: [{ type: 'text', text: `🔮 Horoscope for ${sign}: ${message}` }],
        };
      }
    );
  },
  {},
  {
    basePath: '/api',
    maxDuration: 60,
    verboseLogs: true,
  }
);

export { handler as GET, handler as POST };
