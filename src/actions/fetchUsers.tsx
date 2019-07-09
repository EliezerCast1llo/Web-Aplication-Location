import { ENDPOINTS, TOKEN } from '../constants';

async function fetchUsers() {
  let users: any = [];
  let token = localStorage.getItem(TOKEN);
  const resp = await fetch(ENDPOINTS.USERS, {
    headers: {
      Accept: 'application/json',
      'Content-Type': ' application/json',
      Authorization: token || '',
    },
  });

  if (!resp.ok) {
    throw new Error(`Unknown error occurred (HTTP ${resp.status})!`);
  }

  users = await resp.json();
  return users;
}

export default fetchUsers;
