const getText = document.getElementById('getText')

const getTexts = () => {
    fetch('sample.txt')
    .then(function (res) {
      return  res.text()
    })
    .then(function (data) {
        let output = document.getElementById('output')

        output.innerHTML = data
    })
}

getText.addEventListener('click', getTexts)