const root = document.getElementById('root')
const randomBtn = document.createElement('button')
const evenNumbersWrap = document.querySelector('.evenNumbersWrap')
const oddNumbersWrap = document.querySelector('.oddNumbersWrap')

randomBtn.innerHTML = 'Create random'
root.prepend(randomBtn)

randomBtn.addEventListener('click', () => {
    evenNumbersWrap.innerHTML = '';
    oddNumbersWrap.innerHTML = '';
    generationNumbers(1, 20)
})

function generationNumbers(startNum, endNum) {
    let arr = [];
    let i;
    for (i = startNum; i <= endNum; i++) {
        const generateRandomNumber = Math.floor(Math.random() * 100)
        if (i <= endNum) {
            arr.push(generateRandomNumber)
        }
    }
    arr.sort((a, b) => a - b);

    if (arr.length === endNum) {
        arr.forEach((item) => {
            if (item % 2 === 0) {
                const evenNumber = document.createElement('div')
                evenNumber.innerHTML = item
                evenNumbersWrap.append(evenNumber)
            } else if (item % 2 !== 0) {
                const oddNumber = document.createElement('div')
                oddNumber.innerHTML = item
                oddNumbersWrap.append(oddNumber)
            }
        })
    }


}








