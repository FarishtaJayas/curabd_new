import React from 'react'
import './HospitalVideo.css'


export default function HospitalVideo({ hospitalData }) {

    const videoUrl = 'https://firebasestorage.googleapis.com/v0/b/hotelsandhospitals-9aa7b.appspot.com/o/HospitalVideo%2FTop%2010%20Hotels%20to%20Visit%20in%20Bangkok%20-%20Thailand%20-%20English.mp4?alt=media&token=5ce9971c-4782-41d2-a09a-7cedb6d3da05'


    return (
        <div className='video_section'>
            <div className=' row mx-auto'>
                <div className='video_container text-center'>
                    {/* <h3>Media Section</h3>
                    <p5>Get to know more about your desirability in healthcare.</p5> */}
                    <div className='' >
                        <div className=''>
                            <div className='video_container'>

                                {
                                    hospitalData?.video ?
                                        <video src={hospitalData?.video} autoplay='true' loop='true' muted='true' title='Hotel and Hospital Map'></video>
                                        :
                                        <video src={videoUrl} autoplay='true' loop='true' muted='true' title='Hotel and Hospital Map'></video>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}