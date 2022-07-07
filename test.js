// function digPow(n, p){
//     let arr = n.toString().split("")
//     let res = 0
//     for (let i = 0; i < arr.length ;i++ ) {
//         res += Math.pow(+arr[i], p)
//         p++
//     }
//     return  (res / n) % 1 === 0 ? -1 : res/ n
// }
//
// console.log(digPow(46288, 3))


// Some numbers have funny properties. For example:
//
//     89 --> 8¹ + 9² = 89 * 1
//
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
//
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
//
// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
//
// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
//     In other words:
//
//     Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
//
// If it is the case we will return k, if not return -1.
//
// Note: n and p will always be given as strictly positive integers.

function alphabetPosition(text) {
    let res = []
    let aplh = [...Array(26)].map(_=>(++i).toString(36),i=9)
    let arr = text.toLowerCase()
        .split("")
        .filter(c => c >= 'a' && c <= 'z')
    arr.map(it => aplh.find(( elem,idx) => it === elem && res.push(idx+1)  ))

    return res.join(" ")

}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))

console.log()
// console.log(...Array(26).keys());