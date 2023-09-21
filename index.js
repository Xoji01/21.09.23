let students = ['baxtzod', 'xamza', 'islom', 'abdumanon', 'xojik', 'aziz'] // longest name
let longest = ''
students.filter((name) => {
    if (name.length > longest.length) { longest = name }
})
console.log(longest)

let priceList = [30000, 2000, 11000, 33000, 2000, 100000, 57000, 14000, 18000, 8000]

let from = prompt('цена от')
let up = prompt('цена до')
let prce = priceList.filter((price) => price >= from && price <= up)
alert(prce)
