
const expect = require('chai').expect
//'..' va al archivo de la carpeta superior, en la carpeta superior esta el
// archivo json de configuraci�n donde esta la ruta del modulo ejecutable
const platzom = require('..').default

describe('#platzom', function () {

  it('Si la palabra termina con "ar", se le quitan esas dos letras', function () {
    const translation = platzom("Programar")
    expect(translation).to.equal("Program")
  })

  it('Si la palabra inicia con Z, se le a�ade "pe" al final', function () {
    const translation = platzom("Zorro")
    const translation2 = platzom("Zarpar")

    expect(translation).to.equal("Zorrope")
    expect(translation2).to.equal("Zarppe")
  })

  it('Si la palabra traducida tiene 10 o m�s letras, se debe partir en dos por la mitad y unir con un gui�n medio', function () {
    const translation = platzom("abecedario")
    expect(translation).to.equal("abece-dario")
  })

  it('Por �ltimo, si la palabra original es un pal�ndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras may�sculas y min�sculas', function () {
    const translation = platzom("sometemos")
    expect(translation).to.equal("SoMeTeMoS")
  })

})