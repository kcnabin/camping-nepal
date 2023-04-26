export const getTokenHeader = () => {
  const token = (JSON.parse(localStorage.getItem('camper'))).token
  return {
    headers: {
      'Authorization': `bearer ${token}`
    }
  }
}