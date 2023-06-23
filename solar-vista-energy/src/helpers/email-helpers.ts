export function isValidEmail(email: string): boolean {
  console.log("!!");
  if (email.length) {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  return false;
}
