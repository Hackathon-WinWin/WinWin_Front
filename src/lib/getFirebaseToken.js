const getFirebaseToken = () => {
  try {
    const token = localStorage.getItem('firebase_token');
    return token;
  } catch (e) {
    throw e;
  }
};
export default getFirebaseToken;
