import React from 'react'

const UserCard = () => {
  return (
    <div className="card bg-base-00 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg"
      alt="profile" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Rahul Dravid</h2>
    <p>24 , Male</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veniam, amet possimus eum assumenda cupiditate quis fugiat minima eius. Alias possimus voluptatum facere eos maxime, dolore saepe voluptate nemo sint!</p>
    <div className="card-actions justify-center my-4">
      <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-secondary">Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard
