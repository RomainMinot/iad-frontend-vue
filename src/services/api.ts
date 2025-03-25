import ky from 'ky';

export const api = ky.create({
  prefixUrl: `${window.location.origin}/api`,
});
