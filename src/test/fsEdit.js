const fs = require('fs')

fs.readFile('./entrances.vue', 'utf-8', (err, data) => {
  if (err) {
    throw err
  }

  const regex =
    /\.loginN\s*\{([^}]*background-image:\s*url\s*\(\s*['"]?)aurora\.png(['"]?\s*\)[^}]*)}/gi
  const result = data.replace(regex, (match, p1, p2) => {
    return `.loginN {${p1}GL_index.jpg${p2}}`
  })

  fs.writeFile('./entrances.vue', result, 'utf-8', (err) => {
    if (err) {
      throw err
    }

    console.log('File has been modified.')
  })
})
