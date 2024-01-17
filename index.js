const text = 'Hello world!';
const base64Str = 'SGVsbG8gd29ybGQh';

const textToBuffer = (text, encoding) => {
  const buffer = Buffer.from(text, encoding);

  return buffer;
};

const bufferToText = (buffer, encoding) => {
  const text = buffer.toString(encoding);

  return text;
};

const app = () => {
  const buffer = textToBuffer(text, 'utf8');
  console.log('buffer:', buffer);

  const decodedText = bufferToText(buffer, 'utf8');
  console.log('  text:', decodedText);

  const base64text = bufferToText(buffer, 'base64');
  console.log('base64:', base64text);

  console.log('-----');

  const base64buffer = textToBuffer(base64Str, 'base64');
  console.log('base64buffer:', base64buffer);

  const base64toUtf8 = bufferToText(base64buffer, 'utf8');
  console.log('    utf8text:', base64toUtf8);

  console.log('-----');

  const hexText = bufferToText(buffer, 'hex');
  console.log('hex string:', hexText);

  console.log('-----');

  const base64ToHexBuffer = textToBuffer(base64Str, 'base64');
  console.log('base64buffer', base64ToHexBuffer);

  const hexFromBase64 = bufferToText(base64ToHexBuffer, 'hex');
  console.log('base64ToHex:', hexFromBase64);
};

app();
