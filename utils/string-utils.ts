import { octupTheme } from "../theme/octup-theme";

export function isValidEmail(email: string): boolean {
  // Regular expression to match email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

export function getEmailColor(email: string, showColor: boolean): string {
  if (showColor) {
    if (isValidEmail(email)) {
      return `${octupTheme.colors.success}`;
    }
    return `${octupTheme.colors.warning}`;
  }
  return `${octupTheme.colors.text}`;
}
