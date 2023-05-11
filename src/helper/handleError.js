export const handleError = (e, setInfo) => {
  console.error(e)
  console.log('e.name', e.name)
  if (e.name === 'AxiosError' && !e.response) {
    setInfo('Error connecting to Server!')
    setTimeout(() => setInfo(''), 10000)
  
  } else {
    if (e.response.data && (e.response.data.err === 'TokenExpiredError')) {
      localStorage.removeItem('camper')
      return setInfo('Token Expired! Please logout and login again!')
    }

    if (e.name === 'TypeError') {
      localStorage.removeItem('camper')
      return setInfo('Type Error, probably expired token! Please logout and login again')
    }
    
    if (e.response.data) {
      setInfo(e.response.data.err)
    } else {
      setInfo('Something went wrong! Please logout and login again!')
    }
    setTimeout(() => setInfo(''), 10000)
  }
}