import React from 'react'

export default function RegisterForm() {
  return (
    <div>
      <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Username</span>
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
</label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Password</span>
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
</label>
    </div>

  )
}
