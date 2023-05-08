export const handleError = (e, setInfo) => {
  console.log(e)
  if (e.name === 'AxiosError' && !e.response) {
    setInfo('Error connecting to Server!')
    setTimeout(() => setInfo(''), 10000)
  
  } else {
    setInfo(e.response.data.err)
    setTimeout(() => setInfo(''), 10000)
  }
}