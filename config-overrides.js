module.exports = function override(config, env) {
  config.externals = {
    'commonjs': 'dmx',
  }
  return config;
}