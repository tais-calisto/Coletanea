const notFoundMiddleware = (req, res) => {
  res.status(404).json({ msg: 'Route does not found' })
}

export default notFoundMiddleware
