export const asyncFetch = async (url, options) => {

  const response = await fetch(url, options)

  if (response.ok) {
    return await response.json()
  }

  throw new Error('Something went wrong!')
}
