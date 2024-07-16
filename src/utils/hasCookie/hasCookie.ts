const hasCookie = (name: string) => {
  const cookie = document.cookie
    .split('; ')
    .find((row) => row.split('=')[0] === name);

  if (cookie && cookie.split('=')[1] !== 'undefined') {
    return cookie.split('=')[1];
  } else {
    return null;
  }
};

export {hasCookie};
