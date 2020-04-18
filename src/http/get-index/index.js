const Main = require('@architect/views/main.js')
const staticAssetsHelper = require('./static-assets-helper')

// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: 'Hallo. Hello. Hej.', // ←  Start by adding your name!
    title: 'rechsteiner.de',
    occupation: 'World Economic Forum',
    location: 'Genève',
    bio: 'Hier ist Christoph, einer der Jungs der ersten Stunde und der letzten Runde. Verwendet am liebsten nicht, keine doppelte Verneinung. Beruflich sitzt er im Glashaus und wirft mit dem Stein der Weisen. Denkt scharf nach und handelt dann Stumpf. Denn komplizierter Männer, machen die schöneren Fehler. Nimm ein paar Nüsschen. Nervennahrung.',

    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    email: 'christoph@rechsteiner.de',
    twitter: 'digitalyours',
    linkedin: 'christophrechsteiner',
    instagram: 'digitalyours',
    facebook: 'digitalyours',

    /**
     * Layout
     */
    photographer: 'Christoph',
    service: '',
    credit: '',
    image: staticAssetsHelper('background.jpeg')
    // or link to an external image URL such as ↓
    // image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6'
  })

  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body
  }
}
