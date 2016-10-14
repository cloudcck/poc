(function () {
  var draw = SVG('drawing').size(1650, 1650);
  // create image
  var image = draw.image('images/background.jpg')
  image.size(1650, 1650).y(-150)

  // create text
  var text = draw.text('Hello World').move(300, 0)
  text.font({
    family: 'Source Sans Pro'
    , size: 30
    , anchor: 'middle'
    , leading: 1
  })

  // clip image with text
  image.clipWith(text)
})()


