import crypto from "crypto";

const iterations = 120000;
const keyLength = 64;
const digest = "sha512";

export function hashPassword(password, salt = crypto.randomBytes(16).toString("hex")) {
  const hash = crypto.pbkdf2Sync(password, salt, iterations, keyLength, digest).toString("hex");
  return { salt, hash };
}

export function verifyPassword(password, salt, storedHash) {
  const { hash } = hashPassword(password, salt);
  const incoming = Buffer.from(hash, "hex");
  const stored = Buffer.from(storedHash, "hex");

  return incoming.length === stored.length && crypto.timingSafeEqual(incoming, stored);
}
