module.exports = {
  verbose: true,
  setupFiles: ['./node_modules/raf/polyfill.js', './jest-setup.js'],
  setupTestFrameworkScriptFile: './node_modules/jest-enzyme/lib/index.js',
  moduleNameMapper: {
    '.*\\.(css|styl|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
  },
  moduleDirectories: ['node_modules', 'src', __dirname],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js}',
    '!**/__tests__/**',
  ],
  snapshotSerializers: [
    '<rootDir>/node_modules/enzyme-to-json/serializer',
  ],
};
