const config: IConfig = {
  serve: `http://${window.location.hostname}:31080`,
  keys: ['some secret hurr'],
  session: {
    key: 'koa:sess',
  },
}

export default config
