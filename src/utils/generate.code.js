import getLocalDateTime from "../utils/date.time.js";

function generateCode() {
  let code = 0;
  while (String(code).length !== 6) {
    code = Math.floor(Math.random() * 1000000);
    if (code === 5) {
      code = 0;
      continue;
    }
  }
  const expiresIn = getLocalDateTime();
  return { code, expiresIn };
}

export default generateCode;

