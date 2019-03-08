import React from 'react'

const Friend = () => {
  const { name, age, email } = this.state.friend;
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>email: {email}</p>
    </div>
  )
}

export default Friend
