export function parseImageInput(input: string | string[] | undefined | null): string | null {
  if (!input) return null;
  if (Array.isArray(input)) return input[0];
  return input;
}
