import { generateKeyPairSync } from "crypto";
import { publicEncrypt, privateDecrypt } from "crypto";

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});

// console.log(publicKey);
// console.log(privateKey);

const dadosCriptografados = publicEncrypt(
  publicKey,
  Buffer.from("Mensagem super secreta!")
);

console.log(dadosCriptografados.toString("hex"));

// ** TRANSMISSAO **

const dadosDecifrados = privateDecrypt(privateKey, dadosCriptografados);

console.log(`Dados Decifrados: ${dadosDecifrados.toString("utf-8")}`);