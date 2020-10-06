module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) return []
  
  for (let i = 1; i < matrix.length; i++){
    matrix[i] = matrix[i].reverse()
    i++
  }
  matrix = matrix.join(',').split(',')
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = +matrix[i]
  }
  
  return matrix
}
