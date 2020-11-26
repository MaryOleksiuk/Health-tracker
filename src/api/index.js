import { root } from './config';

export const api = Object.freeze({
  user: {
    register: (user) => {
      return fetch(`${root}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
        credentials: 'include'
      })
    },
    login: (credentials) => {
      return fetch(`${root}/login`, {
        method: 'POST',
        headers: {
          'Authorization': `Base ${credentials}`,
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      })
    },
    getUser: () => {
      return fetch(`${root}/profile`, {
        method: 'GET',
        credentials: 'include'
      });
    },
    updateUser: (payload) => {
      return fetch(`${root}/users`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        credentials: 'include'
      })
    },
    logout: () => {
      return fetch(`${root}/logout`, {
        method: 'POST',
        credentials: 'include'
      });
    }
  },
  tracker: {
    getRecord: ({ type }) => {
      const params = new URLSearchParams({
        kind: type,
      });
      return fetch(`${root}/records?${params}`, {
        method: 'GET',
        credentials: 'include'
      });
    },
    createRecord: ({ type, record }) => {
      const params = new URLSearchParams({
        kind: type,
      });
      return fetch(`${root}/records?${params}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify({
          value: record
        }),
      });
    },
    updateRecord: ({ type, hash, record }) => {
      const params = new URLSearchParams({
        kind: type,
      });
      return fetch(`${root}/records/${hash}/?${params}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          value: record
        }),
      });
    },
    getScore: () => {
      return fetch(`${root}/reports`, {
        method: 'GET',
        credentials: 'include'
      });
    },
    resetScore: () => {
      return fetch(`${root}/reports/reset`, {
        method: 'POST',
        credentials: 'include'
      });
    },
  }
});
