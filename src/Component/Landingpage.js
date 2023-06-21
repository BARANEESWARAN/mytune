import React, { useState } from 'react'
import logo from "../../src/musical-man-1932271_1280.png"
import videoimg from "../../src/smartmockups_lj4f5mgo.jpg"
import brand from "../../src/radio-311676.svg"
function Landingpage() {

	const[show,setShow]=useState(false)
  return (
  <>
{/* <-------Showcase & nav---------> */}
<div id='showcase'>

<header>
<nav className='cf '>

  <ul className={`${show?"cf show":"cf"}`}>
  <img src={"https://cdn.pixabay.com/photo/2014/05/26/09/09/icon-354293_640.png"} alt='logo' width={100} />
    <li className='hide-on-small'>

      <a href='#showcase'>
		

		myTune</a>
    </li>
    <li>
      <a href='#showcase'>Overview</a>
    </li>
    <li>
      <a href='#music'>Music</a>
    </li>
    <li>
      <a href='#video'>Video</a>
    </li>
	<li>
      <a href='#card'>Gift Cards</a>
    </li>
  </ul>
  <a href='#' id='openup' onClick={()=>setShow(!show)}>myTune</a>
</nav>
</header> 
<div className='section-main container'>
	<h1>myTunes.</h1>
	<h2>Your music, movies, and TV shows take center stage.</h2>
	<p className='lead'>
	myTunes is the best way to organize and enjoy the music, movies, and TV shows you already have — and shop for the ones you want. Enjoy all the entertainment myTunes has to offer on your Mac and PC.
	</p>
</div>








{/* <-------Music section---------> */}
<section id='music' className='section'>

<div className='container'>
<div>
<img className='tab-img' src={logo} alt='img'/>
</div>
<div className='music-right'>
	<h2 className='section-head'>
		<i className='fas fa-music'></i>
		Music
	</h2>
	<h3>45 million songs,zero ads</h3>
	<p className='lead'>
	Stream over 45 million songs, ad-free. Or download albums and tracks to listen to offline. All the music in your personal myTunes library — no matter where it came from — lives right alongside the Orange Music catalog. Start your free three-month trial with no commitment, and cancel anytime.
	</p>
	<a href='#' className='btn btn-primary'>
		Start Your Trial Now
	</a>
	<p className='text-light'>Orange Music is available in myTunes, and for iOS and Android devices.</p>
	</div>
</div>



</section>



{/* <-------video section---------> */}
<section id='video' className='section '>
<div className='container'>
<h3>
The movie and TV collection you always wished for. Granted.
</h3>
<p className='lead'>
With over 100,000 movies and TV shows to choose from, there’s always something great to watch on myTunes and if you watch on Orange TV 4K, you’ll be able to enjoy a tremendous selection of your favorite content in 4K HDR. So get ready to enjoy episodes of your favorite TV shows or hit movies you’ve been waiting to see — anytime, anywhere. Just tap to play, or even download if you’re going somewhere you won’t have Wi-Fi.
</p>
<a href='#' className='btn btn-secondary'>
	Read More
</a>
<img src={videoimg} alt='img'/>
</div>

</section>
{/* <-------Entertainment section---------> */}


<section id='entertainment' className='section '>
<div className='container'>



<h3>
A world of entertainment. Available wherever you are.
</h3>
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam nobis, nisi ut expedita, doloribus reprehenderit explicabo non velit repellat alias saepe inventore repellendus? Molestias suscipit eos tempora? Quae quaerat cumque in veritatis impedit dolorum sapiente recusandae minima quo aperiam quam, excepturi quasi totam ad quas? Ipsam laudantium soluta delectus!
</p>



</div>

</section>
{/* <-------gift snd card section---------> */}
<section id='card'className='section '>

	<div className='container'>
		<div className='card-left'>
		<img src={"https://cdn.pixabay.com/photo/2015/08/11/08/21/coupon-883638_640.png"}  alt="card"/>
		</div>
		<div className='card-right'>
	<h3>
Gift Cards</h3>
<p>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque expedita tempore quasi omnis a aut et totam illo fuga accusamus dolorum vero, ut harum consectetur. Minima molestias officiis culpa non sed dicta itaque. Et aliquam illo obcaecati
 molestias veritatis porro.	
</p>
<p>Already have an Orange MyTunes Music Gift Card?</p>
<hr className='hr'></hr>
<a href='#' className='redeem'>
	> Redeem
</a>
		</div>
	
	</div>
</section>
{/* <-------footer---------> */}
<footer>
	
	<p>Copyright © 2018 Orange myTunes</p>
</footer>
</div>
</>
  )
}

export default Landingpage