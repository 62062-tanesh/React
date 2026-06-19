import React from 'react'
import Section1 from './Components/Section 1/Section1'
import Section2 from './Components/Section 2/Section2'

const App = () => {

  const arr = [
    {
      
      img : 'https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg',
      intro : 'This is working in the field of construction and she is pro in that. ',
      tag : 'Satisfied'

    },{

      img : 'https://images.pexels.com/photos/5717329/pexels-photo-5717329.jpeg',
      intro : 'This is working in the Corporate Tradition.',
      tag : 'Not Satisfied'

    },{

      img : 'https://images.pexels.com/photos/5717329/pexels-photo-5717329.jpeg',
      intro : 'these are the housewife that know her work very well.',
      tag : 'micellenious'

    }
  ]
  return (

    
    <div>
      <Section1 users = {arr}/>
      <Section2/>
    </div>
  )
}

export default App