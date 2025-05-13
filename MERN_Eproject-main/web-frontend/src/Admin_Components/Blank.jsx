import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar';

export default function Blank() {
  return (
    <>
    <div id="wrapper">
    <Sidebar/>
    <div id="content-wrapper" class="d-flex flex-column">
    
    <div id="content">
    <Navbar/>
      <div class="container-fluid">


<h1 class="h3 mb-4 text-gray-800">Blank Page</h1>

</div>
</div>
</div>
</div>
<Footer/>
    </>
  )
}
