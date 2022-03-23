const getEnv = (key: string) => {
  const value = process.env[key];
  if (value === undefined) {
    process.exit();
  }

  return value;
};

const env = {
  NEWT_API_TOKEN: getEnv('NEWT_API_TOKEN'),
  NEWT_CDN_API_TOKEN: getEnv('NEWT_CDN_API_TOKEN'),
};

export { env };
