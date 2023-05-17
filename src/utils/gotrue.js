import GoTrue from 'gotrue-js';

export const auth = new GoTrue({
    APIUrl: 'https://meu-perfil.netlify.app/.netlify/identity',
    audience: '',
    setCookie: false,
  });