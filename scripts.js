let btn = document.querySelector('.btn')
let result = document.querySelector('.result')


const getResult = () => {
   let minNum = - 10
   let maxNum = 10
   let numbers = []
   let min 
   let max
   let sumNumbers 
   let average
   let prod

for (i = 0; i < 10; i++) {
numbers.push(Math.floor(Math.random() * (maxNum - minNum + 1) + minNum))
min = Math.min(...numbers)
max = Math.max(...numbers)
sumNumbers = numbers.reduce((a, b) => a + b)
average = sumNumbers / numbers.length
prod = numbers.reduce((a, b) => a * b)
}

result.innerHTML = `Случайные числа: ${numbers}<br>
                     Минимальное: ${min}<br>
                     Максимальное: ${max}<br>
                     Среднее арифметическое: ${average}<br>
                     Сумма чисел: ${sumNumbers}<br>
                     Произведение чисел: ${prod}<br>
`

}

btn.addEventListener('click', getResult)