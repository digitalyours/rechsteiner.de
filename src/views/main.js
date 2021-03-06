const Styles = require('./styles')
const Symbols = require('./symbols')
const Splash = require('./splash')
const Content = require('./content')
module.exports = function Home (props) {
  props = props || {}
  let title = props.title || 'Personal Website'
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1">
  <meta name="have-i-been-pwned-verification" value="536d4f6b917339ce2269c4f7b416c213">  
<title>${title}</title>
  ${Styles(props)}
  <link href="https://fonts.googleapis.com/css?family=Fira+Sans&display=swap" rel="stylesheet">
  <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" rel="icon" type="image/x-icon">
</head>
<body
  class="
    min-width-20
    display-flex-large
    height-100vh
    overflow-hidden-large
  "
>
 ${Symbols}
 ${Splash(props)}
 ${Content(props)}
</body>
</html>
  `
}
