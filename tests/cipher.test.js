const cipher =  require("../codes/cipher");

test("Test Encryption", () => {
    expect(cipher.encryptCipher("apple",4)).toBe("ettpi");
});

test("Test Decryption", () => {
    expect(cipher.decryptCipher("ettpi",4)).toBe("apple");
});

test("Test Encryption with z alphabet", () => {
    expect(cipher.encryptCipher("xyz",4)).toBe("bcd");
});

test("Test Decryption with z alphabet", () => {
    expect(cipher.decryptCipher("ddd",4)).toBe("zzz");
});

test("Test Encryption without Key", () => {
    expect(cipher.encryptCipher("carrot",0)).toBe("carrot");
});

test("Test Decryption without Key", () => {
    expect(cipher.decryptCipher("carrot",0)).toBe("carrot");
});

test("Test Encryption with Period", () => {
    expect(cipher.decryptCipher(".",1)).toBe(".");
});

test("Test Decryption with Period", () => {
    expect(cipher.decryptCipher("et.pi",4)).toBe("ap.le");
});