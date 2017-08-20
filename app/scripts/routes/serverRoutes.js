import {Route} from 'src/utils/routes'

export default {
  '/': new Route({
    name: 'home',
    handler: require('src/pages/home'),
  }),
  '/about': new Route({
    name: 'about',
    handler: require('src/pages/about'),
  }),
  '/blog': new Route({
    name: 'blog',
    handler: require('src/pages/blog'),
  }),
  '/blog/:blogSlug': new Route({
    name: 'blog-post',
    handler: require('src/pages/blog/post'),
  }),
}
