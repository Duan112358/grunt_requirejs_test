module.exports = {
  dev: {
    options: {
      port: 8999,
      open: true,
      base: 'dist',
      hosthost: 'localhost'
    }
  },
  release: {
    options: {
      port: 9000,
      base: 'dist',
      open: true,
      keepalive: true
    }
  }
}
