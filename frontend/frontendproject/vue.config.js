module.exports = {
  transpileDependencies: [
    'vuetify'
  ]
  devServer: {
        	proxy : {'https://weathertest1313.herokuapp.com/'}
        }
}
