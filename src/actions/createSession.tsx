import { ENDPOINTS } from '../constants';

async function createSession(inputs: any) {
  let response;
  const resp = await fetch(ENDPOINTS.AUTHENTICATE, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': ' application/json',
    },
    body: JSON.stringify(inputs),
  });

  response = await resp.json();
  return response;
}

export default createSession;
