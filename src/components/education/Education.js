import React from 'react'
//1px 2px 2px 9px #F4AAB9
export const Education = () => {
    return ( <div style={{
        boxShadow: '1px 2px 9px #F4AAB9 ',
        margin: '20px',
        padding: '16px'
      }}>
        <div >
        <h3  > Education </h3>
        </div>

        <div>
        <p style={{ textAlign:"justfiy", fontsize: "25px"}} >
        <li style={{listStyle: "circle"}}> London Metropolitan University BSc Hons Computing (1st), 2020-2023</li>
        <li style={{listStyle: "circle"}}> City & Islington College- English(4), Maths(c), Access to Higher Education(M) (2016-2020)</li> 
        </p>
        </div>
        </div>
    )
}