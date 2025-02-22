import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={' US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[350px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Winning Isn't For Everyone. It's for those who do whatever it takes</p>
          <p>It was Michael Jordan's agent who coined the term 'Air Jordan' referencing the skilled jumps Jordan was known for who also convinced him to listen to the Nike pitch in 1984. From here Jordan signed a 5 year deal for $12.5m which was three times more than any other deal in the NBA.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Jordan Brand believes world where everyone has the same opportunities and that education has the power to promote diversity, inclusion and equality. We are dedicated to leveraging the power of our brand to create a level playing field for underserved youth. We do this by unlocking access to education and mentorship
          </p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={' CHOOSEUS'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Every original Nike shoe has a label sewn on with a different size, barcode and model number. The barcode is usually located in the instep area or the shoe tongue. The serial number for the barcode is unique and none of them are the same as each other. In fact, the barcodes for the right and left shoes are different</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Nike's omnichannel approach ensures a seamless and integrated Customer Experience (CX) across online and offline channels. By connecting its digital and physical touchpoints, Nike provides a cohesive and convenient shopping experience that meets customers where they are.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>We understand there may be a problem with your order. We're looking into it right now, and we'll get back to you as soon as we find out what's going on</p>
        </div>
      </div>
    </div>
  )
}

export default About