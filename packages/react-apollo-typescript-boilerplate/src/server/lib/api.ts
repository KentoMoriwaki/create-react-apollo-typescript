import "isomorphic-fetch";

export default function api(
  input?: Request | string,
  init?: RequestInit
): Promise<Response> {
  return fetch(input, init);
}
