export const ApiType = {
  // NOTE: While both "i" and "t" are optional at least one argument is required.
  id: 'i', // ex. tt1285016 : ID of valid IMD
  title: 't', // string : Title of movie to search for
  search: 's', // string : Search by movie title
}

export const MethodType = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE',
  connect: 'CONNECT',
  patch: 'PATCH',
}

export const OptionType = {
  year: 'y', // number : Year of release
  type: 'type', // movie | series | episode : Type of result to return.
  plot: 'plot', // 	short | full : Return short or full plot.
  page: 'page', // 1-100 : Only for Search
}

export const request = async (options) => {
  try {
    return await fetch(process.env.VUE_APP_NETLIFY_FUNCTIONS_ENDPOINT, {
      method: process.env.VUE_APP_NETLIFY_FUNCTIONS_METHOD,
      body: JSON.stringify(options),
    }).then((res) => res.json())
  } catch (e) {
    alert(e)
  }
}
