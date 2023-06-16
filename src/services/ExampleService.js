import fetch from 'auth/FetchInterceptor'

const exampleService = {}

exampleService.getPost = function (params) {
  return fetch({
    url: '/posts',
    method: 'get',
    params
  })
}

exampleService.getUser = function (params, id = '') {
  return fetch({
    url: `/users/${id}`,
    method: 'get',
    params
  })
}

exampleService.setPost = function (data) {
  return fetch({
    url: '/posts',
    method: 'post',
    data: data
  })
}

exampleService.setUser = function (data) {
  return fetch({
    url: '/users',
    method: 'post',
    data: data
  })
}


export default exampleService