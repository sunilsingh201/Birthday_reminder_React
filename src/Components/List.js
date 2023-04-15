import React from 'react'

function List({people}) {
  return (
    <div>
        {
            people.map((person)=>{
                const {id,name,age,image} = person;
                return(
                    <article key={id} className='person'>
                        <img src={image} alt={name}/>
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years old</p>
                        </div>
                    </article>
                )
            })
        }
    </div>
  )
}

export default List