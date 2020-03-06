const { createSVGCanvas } = require('svg-canvas')
const canvas = createSVGCanvas(1024, 1024)
const ctx = canvas.getContext('2d')

// Fundo preto
ctx.fillStyle = 'black'
ctx.fillRect(0, 0, canvas.width, canvas.height)

// Preencher triângulos
// Vermelho
ctx.fillStyle = 'red'
ctx.beginPath()
ctx.moveTo(512, 512)
ctx.lineTo(100, 100)
ctx.lineTo(924, 100)
ctx.fill()

// Verde
ctx.fillStyle = 'green'
ctx.beginPath()
ctx.moveTo(512, 512)
ctx.lineTo(100, 924)
ctx.lineTo(100, 100)
ctx.fill()

// Amarelo
ctx.fillStyle = 'yellow'
ctx.beginPath()
ctx.moveTo(512, 512)
ctx.lineTo(924, 100)
ctx.lineTo(924, 924)
ctx.fill()

// Azul
ctx.fillStyle = 'blue'
ctx.beginPath()
ctx.moveTo(512, 512)
ctx.lineTo(924, 924)
ctx.lineTo(100, 924)
ctx.fill()

// Linhas cinza claro
ctx.strokeStyle = 'lightgray'
ctx.lineWidth = 20
ctx.beginPath()
ctx.moveTo(100, 100)
ctx.lineTo(924, 100)
ctx.lineTo(924, 924)
ctx.lineTo(100, 924)
ctx.closePath()
ctx.stroke()

// Linhas diagonais
ctx.beginPath()
ctx.moveTo(100, 100)
ctx.lineTo(924, 924)
ctx.moveTo(924, 100)
ctx.lineTo(100, 924)
ctx.stroke()


// Círculos brancos
ctx.fillStyle = 'white'
ctx.beginPath()
ctx.arc(924, 100, 50, 0, 2 * Math.PI)
ctx.fill()
ctx.beginPath()
ctx.arc(512, 512, 50, 0, 2 * Math.PI)
ctx.fill()
ctx.beginPath()
ctx.arc(100, 100, 50, 0, 2 * Math.PI)
ctx.fill()
ctx.beginPath()
ctx.arc(924, 924, 50, 0, 2 * Math.PI)
ctx.fill()
ctx.beginPath()
ctx.arc(100, 924, 50, 0, 2 * Math.PI)
ctx.fill()

// Salvar imagem SVG
const fs = require('fs')
fs.writeFileSync(__dirname + '/image.svg', canvas.toBuffer())
console.log('Imagem salva!')




// const { createCanvas } = require('canvas')
// const canvas = createCanvas(1024, 1024)
// const ctx = canvas.getContext('2d')

// // Fundo preto
// ctx.fillStyle = 'black'
// ctx.fillRect(0, 0, canvas.width, canvas.height)
// // Preencher triângulos
// // Vermelho
// ctx.fillStyle = 'red'
// ctx.beginPath()
// ctx.moveTo(512, 512)
// ctx.lineTo(100, 100)
// ctx.lineTo(924, 100)
// ctx.fill()

// // Verde
// ctx.fillStyle = 'green'
// ctx.beginPath()
// ctx.moveTo(512, 512)
// ctx.lineTo(100, 924)
// ctx.lineTo(100, 100)
// ctx.fill()

// // Amarelo
// ctx.fillStyle = 'yellow'
// ctx.beginPath()
// ctx.moveTo(512, 512)
// ctx.lineTo(924, 100)
// ctx.lineTo(924, 924)
// ctx.fill()

// // Azul
// ctx.fillStyle = 'blue'
// ctx.beginPath()
// ctx.moveTo(512, 512)
// ctx.lineTo(924, 924)
// ctx.lineTo(100, 924)
// ctx.fill()

// // Linhas cinza claro
// ctx.strokeStyle = 'lightgray'
// ctx.lineWidth = 20
// ctx.beginPath()
// ctx.moveTo(100, 100)
// ctx.lineTo(924, 100)
// ctx.lineTo(924, 924)
// ctx.lineTo(100, 924)
// ctx.closePath()
// ctx.stroke()

// // Linhas diagonais
// ctx.beginPath()
// ctx.moveTo(100, 100)
// ctx.lineTo(924, 924)
// ctx.moveTo(924, 100)
// ctx.lineTo(100, 924)
// ctx.stroke()

// // Círculos brancos
// ctx.fillStyle = 'white'
// ctx.beginPath()
// ctx.arc(924, 100, 50, 0, 2 * Math.PI)
// ctx.fill()
// ctx.beginPath()
// ctx.arc(512, 512, 50, 0, 2 * Math.PI)
// ctx.fill()
// ctx.beginPath()
// ctx.arc(100, 100, 50, 0, 2 * Math.PI)
// ctx.fill()
// ctx.beginPath()
// ctx.arc(924, 924, 50, 0, 2 * Math.PI)
// ctx.fill()
// ctx.beginPath()
// ctx.arc(100, 924, 50, 0, 2 * Math.PI)
// ctx.fill()

// const fs = require('fs')
// const out = fs.createWriteStream(__dirname + '/image.png')
// const stream = canvas.createPNGStream()
// stream.pipe(out)
// out.on('finish', () => console.log('Imagem salva!'))