export function isValidEmail(email: string): boolean {
  // Regular expression to match email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

export function getEmailColor(email: string, showColor: boolean): string {
  if (showColor) {
    if (isValidEmail(email)) {
      return "green";
    }
    return "red";
  }
  return "black";
}
