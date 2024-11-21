const base64 = require('base64-js')

const isPrime = (num) => {
  num = parseInt(num)
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

const processData = (data, file_b64) => {
  // Example hardcoded value
  const user_id = 'john_doe_17091999'
  const email = 'john@xyz.com'
  const roll_number = 'ABCD123'

  const numbers = []
  const alphabets = []
  let highestLowerCase = null
  let isPrimeFound = false

  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item)
      if (!isPrimeFound && isPrime(item)) isPrimeFound = true
    } else if (/^[a-zA-Z]$/.test(item)) {
      alphabets.push(item)
      if (item === item.toLowerCase()) {
        if (!highestLowerCase || item > highestLowerCase) {
          highestLowerCase = item
        }
      }
    }
  })

  let fileValid = false
  let fileMimeType = null
  let fileSizeKB = null

  if (file_b64) {
    try {
      const decodedFile = Buffer.from(file_b64, 'base64')
      fileValid = true
      fileMimeType = 'unknown'
      fileSizeKB = (decodedFile.length / 1024).toFixed(2)
    } catch (error) {
      fileValid = false
    }
  }

  return {
    is_success: true,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowerCase ? [highestLowerCase] : [],
    is_prime_found: isPrimeFound,
    file_valid: fileValid,
    file_mime_type: fileMimeType,
    file_size_kb: fileSizeKB,
  }
}

module.exports = { processData }
