export function generateRandomString(length = 6) {
  return Math.random().toString(36).substring(2, 2 + length);
}

export function generateRandomEmail() {
  return `user_${Date.now()}@test.com`;
}