import React from 'react'

const RoutersIndex = () => {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/faq' element={<Faq />} />
    <Route path='/product/:id' element={<Product />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
  )
}

export default RoutersIndex