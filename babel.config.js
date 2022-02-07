module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        corejs: 3,
        useBuiltIns: 'entry',
        targets: {
          esmodules: true,
        }
      },
    ],
  ],
};
