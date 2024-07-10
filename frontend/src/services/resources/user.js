import api from "../api";

const signIn = async (data) => {
  const result = await api.post('/user/signin', data);
  return result;
}

const signUp = async (data) => {
  const result = await api.post('/user/signup', data);
  return result;
}

const me = async () => {
  const result = await api.get('/user/me');
  return result;
}

export { signIn, signUp, me };