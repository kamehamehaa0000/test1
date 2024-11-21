const express = require('express')
const { processData } = require('../utils/helpers')
const router = express.Router()

// POST Route
router.post('/', async (req, res) => {
  try {
    const { data, file_b64 } = req.body

    if (!data || !Array.isArray(data)) {
      return res
        .status(400)
        .json({ is_success: false, message: 'Invalid input' })
    }

    const response = processData(data, file_b64)
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({
      is_success: false,
      message: 'Server error',
      error: error.message,
    })
  }
})

router.get('/', (req, res) => {
  res.status(200).json({ operation_code: 1 })
})

module.exports = router
