const home = {
  name: 'home',
  path: '/',
  className: 'home',
  component: require('../pages/Home'),
}

const about = {
  name: 'about',
  path: '/about',
  className: 'about',
  component: require('../pages/About'),
}

const blog = {
  name: 'blog',
  path: '/blog',
  className: 'blog',
  component: require('../pages/Blog'),
}

const blogPost = {
  name: 'blog-post',
  path: '/blog/:blogSlug',
  className: 'blog-post',
  component: require('../pages/BlogPost'),
}

const notFound = {
  name: 'not-found',
  path: '*',
  className: 'not-found',
  component: require('../pages/NotFound'),
}

export default {
  home,
  about,
  blog,
  blogPost,
  notFound,
}
