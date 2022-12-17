module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic'
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'babel-plugin-react-scoped-css',
      {
        include: '.scoped.(sa|sc|c)ss$'
      }
    ]
  ]
}
