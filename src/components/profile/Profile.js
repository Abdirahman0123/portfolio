import React from 'react'
//1px 2px 9px #F4AAB9
//2px 2px 2px 9px rgb(255, 236, 229)
export const Profile = () => {
  return (<div /*style={{color: "red", textAlign: 'justify'}}*/>
    
    <div style={{
      boxShadow: '1px 2px 9px #F4AAB9',
      
    }}>
      
      <h3 > Profile </h3>
      
      <p style={{
        textAlign: "justify", width: '900px'     

      }}
      > My name is Abdirahman Awale, I am a student at London Met
        starting 3rd year in Computing. I am in interested in becoming Software engineer
        as Java developer when I graduate. After a few years in this field, I want to
        move to mobile app development. My original career goal was to
        be Database Administrator. When I started university, I realised
        having coding skills is crucial. Therefore, I put more effort on learning Java.
        As time went by, I become more inclined towards coding and switched my career to
        Software Engineer. I have not abandoned my passion for database because a
        professional Software Engineer must be able to work with relevant technologies including DBMSs
      </p>
    </div>
  </div>

  )
}
// style={{width: '600px', /*marginLeft: '500px',*/ textAlign:'justify'}}
