import React from 'react'
//1px 2px 9px #F4AAB9
//2px 2px 2px 9px rgb(255, 236, 229)
export const Profile = () => {
  return (<div /*style={{color: "red", textAlign: 'justify'}}*/>
    
    <div style={{
      boxShadow: '1px 2px 9px #F4AAB9',
      
    }}>
      
      <h3 > Profile </h3>
      <h5>Abdirahman Awale</h5>
      <p style={{
        textAlign: "justify", width: '900px'     
      }}
      > I am a recent graduate in BSc Computing (First Class degree) with three months’ relevant experience as a front-end developer (React). 
      Through this experience, I learnt how to work independently and be a team player. 
      During my time at university, I gained time management, problem-solving, multitasking and planning skills 
      as sometimes courseworks were due at the same time with their exam I learnt how to stay motivated when I face challenges. 
      I am seeking a graduate backend role using Java/C# but also willing to learn new languages, frameworks and technologies required for the role.
      </p>
    </div>
  </div>
  )
}

