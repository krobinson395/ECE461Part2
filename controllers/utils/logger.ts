const fs = require('fs');
require('dotenv').config();

export const validateUrl = (url: string) => {
  if (
    /^((http|https):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(
      url
    )
  ) {
    return true;
  } else {
    return false;
  }
};

export const log = (
  message: string,
  messageFormal: string,
  code: number
) => {
  if (code == undefined) {
    code = parseInt(process.env.LOG_LEVEL!) || 0;
  }
  if (code == 0) {
    return;
  }
  if (code == 1) {
    console.log(message);
    return;
  }
  if (code == 2) {
    fs.writeFileSync(process.env.LOG_FILE, `${messageFormal}\n`, {flag: 'a'});
    return;
  }
};

export const retrieveFunctionLogFile = () => {
  const logFilePath: string | undefined = process.env.LOG_FILE;
  const level: number = parseInt(process.env.LOG_LEVEL!) || 0!;
  return [logFilePath, level];
};
