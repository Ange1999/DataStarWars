export default function (URL) {
  return fetch(URL).then((response) => response.json());
}
