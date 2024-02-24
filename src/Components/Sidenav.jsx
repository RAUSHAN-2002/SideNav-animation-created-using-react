import React from 'react'

const Sidenav = () => {
  return (
       <div className="sidebar  h-[100vh] w-[40vw] ml-[60%] bg-green-600">
          <div className="relative flex justify-between p-9 top-8">
            <a href="#">Youtube</a><a href="#">instagram</a><a href="#">discord</a><a href="#">linkdln</a><a href="#">facebook</a>
          </div>
          <div className="relative grid grid-cols-1 gap-4 text-5xl p-8 top-[20vh]">
            <a href="#">Home</a><a href="#">About</a><a href="#">Courses</a>
          </div>
       </div>
  )
}

export default Sidenav