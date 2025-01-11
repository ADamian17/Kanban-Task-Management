export function validateEmail(email: string): string | undefined {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if ((email ?? "").length > 0 && !emailRegex.test(email)) {
    return "Please enter valid email";
  }
}
