// Decode HTML entities
export function htmlDecode(input) {

  // eslint-disable-next-line no-undef
  const doc = new DOMParser().parseFromString(input, 'text/html');
  return doc.documentElement.textContent;

}
