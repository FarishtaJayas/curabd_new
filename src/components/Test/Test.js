import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useCollection } from '../../Hooks/useCollection';
import Footer from '../../Shared/Footer/Footer';
import HotelDepartments from '../Hotels/HotelDepartment/HotelDepartments';
import HotelMap from '../Hotels/HotelMap/HotelMap';
import HotelMapGostDiv from '../Hotels/HotelMap/HotelMapGostDiv/HotelMapGostDiv';
import HotelSlider from '../Hotels/HotelVideo/HotelSlider';

import './test.css'


const Test = () => {
    let [selectedHotel, setSelectedHotel] = useState('')

    const { document } = useCollection('Hotels');
    const color = ['#63328B', '#BB2C71', '#BC1F43', '#737476', '#845CA6', '#EB912E', '#79B44E', '#ED9331', '#00A7C7']


    let [fiveHotel, setFiveHotel] = useState([]);
    let [arrayIndex, setArrayIndex] = useState(0);

    let [fiveColor, setFiveColor] = useState([]);
    let [colorIndex, setColorIndex] = useState(0)


    function spinRightColor(document, len) {
        let newArr = [];
        let span = len + colorIndex;
        let index = null;

        for (let i = colorIndex; i < span; i++) {
            index = i;
            if (i > (document?.length - 1)) {
                index = i - parseInt(i / document?.length) * document?.length;
            }
            newArr.push(document[index])
        }
        setFiveColor(newArr);
        setColorIndex(colorIndex + 1);
    }

    function spinRightHotel(document, len) {
        spinRightColor(color, 5);
        let newArr = [];
        let span = len + arrayIndex;
        let index = null;

        for (let i = arrayIndex; i < span; i++) {
            index = i;
            if (i > (document?.length - 1)) {
                index = i - parseInt(i / document?.length) * document?.length;
            }
            newArr.push(document[index])
        }
        setFiveHotel(newArr);
        setArrayIndex(arrayIndex + 1);



    }


    useEffect(() => {
        spinRightHotel(document, 5)
    }, [document])

    let [firstHotel, secondHotel, thirdHotel, fourthHotel, fifthHotel] = fiveHotel;
    let [firstColor, secondColor, thirdColor, fourthColor, fifthColor] = fiveColor;


    // Code Here Rafi
    let [visibility, setVisibility] = useState(false);
    const handleSelectValue = (selectedHotel) => {
        setVisibility(!visibility);
        setSelectedHotel(selectedHotel)
    }


    let [allPagesVisibility, setAllPagesVisibility] = useState(false);

    const HandleHoverButtonClick = () => {
        setAllPagesVisibility(!allPagesVisibility);
    }

    return (
        <>
            <div className="ourHotels">
                {

                    !selectedHotel?.id ?
                        <>
                            <div className="container pt-5">
                                <div className="col-12 mt-5" >
                                    <div>
                                        <h3>Our Hotels</h3>
                                        <h4>Find out the most comfortable and cost-effective hotel options.
                                        </h4>


                                    </div>
                                </div>
                            </div>

                        </>

                        : <div className='map_container'>
                            <div className="container pt-5">
                                <div className="col-12 mt-5" >
                                    <div >
                                        <h3 className='none'>Our Hotels</h3>
                                        <h4 className='none'>Find out the most comfortable and cost-effective hotel options.
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="mapContainer iFrameContainer mapContainerLock">
                                <div style={{ width: '100vw', height: '100%' }}>
                                    <iframe src={selectedHotel?.map} width="100%" height="100%" title='Hotel and Hotel Map'></iframe>



                                </div>
                            </div>
                        </div>
                }


                <div className="row svgContainer">
                    <div className="col-12 m-0 p-0">
                        <div className="spinner w-100 h-100  d-flex align-items-end flex-column ">

                            <div className="svg">
                                <div>
                                    <svg className='rotate spinnerSVG mainSpinner' version="1.1" id="Layer_1" x="0px" y="0px"
                                        viewBox="0 0 800 800" >
                                        {/* main spinner */}

                                        <g >

                                            <g>
                                                <path style={{ 'fill': firstColor }} onMouseEnter={() => handleSelectValue(firstHotel)} class="st10" d="M582.18,146.95L800,800V112.7c-0.98,0-1.97-0.02-2.95-0.02C722.01,112.68,649.78,124.72,582.18,146.95z" />
                                                < text transform="matrix(0.1602 0.9871 -0.9871 0.1602 689.3089 138.7074)" class="st1 st2 st3 ">{firstHotel?.name?.substr(0, 32)}</text>
                                            </g>

                                            <g>
                                                <path style={{ 'fill': secondColor }} onMouseEnter={() => handleSelectValue(secondHotel)} class="st8" d="M391.9,244.73L800,800L582.18,146.95C513.3,169.6,449.24,202.83,391.9,244.73z" />
                                                <text transform="matrix(0.469 0.8832 -0.8832 0.469 487.9003 215.6712)" class="st1 st2 st9">{secondHotel?.name?.substr(0, 32)}</text>
                                            </g>


                                            <g>
                                                <path style={{ 'fill': thirdColor }} onMouseEnter={() => handleSelectValue(thirdHotel)} class="st6" d="M240.89,396.08L800,800L391.9,244.73C334.05,287.02,283.05,338.13,240.89,396.08z" />
                                                <text transform="matrix(0.7116 0.7026 -0.7026 0.7116 320.2458 337.878)" class="st1 st2 st7">{thirdHotel?.name?.substr(0, 32)}</text>
                                            </g>



                                            <g>
                                                <path style={{ 'fill': fourthColor }} onMouseEnter={() => handleSelectValue(fourthHotel)} class="st4" d="M142.66,589.24L800,800L240.89,396.08C198.58,454.24,165.17,519.3,142.66,589.24z" />
                                                <text transform="matrix(0.8988 0.4385 -0.4385 0.8988 206.4937 513.256)" class="st1 st2 st5">{fourthHotel?.name?.substr(0, 32)}</text>
                                            </g>


                                            <g>
                                                <path style={{ 'fill': fifthColor }} onMouseEnter={() => handleSelectValue(fifthHotel)} class="st0" d="M142.66,589.24c-21.37,66.42-32.93,137.24-32.93,210.76H800L142.66,589.24z" />
                                                <text transform="matrix(0.9912 0.1324 -0.1324 0.9912 156.1868 718.0134)" class="st1 st2 st3">{fifthHotel?.name?.substr(0, 32)} </text>
                                            </g>
                                        </g>

                                        {/* hover section  */}
                                        <g className=''>

                                            {

                                                selectedHotel?.id === firstHotel?.id ?

                                                    < g
                                                        onClick={() => HandleHoverButtonClick()} >
                                                        <HashLink to="#HotelMap">
                                                            <path style={{ 'fill': firstColor }} class="st10" d="M800,14.26c-110,0-214.72,22.61-309.78,63.41L800,800V14.26z" />
                                                        </  HashLink>

                                                        <text transform="matrix(0.2016 0.9795 -0.9795 0.2016 645.1019 96.0461)" class="st1 st11 st12">{firstHotel?.name?.substr(0, 32)}</text>


                                                    </g>
                                                    : <p></p>
                                            }





                                            {
                                                selectedHotel?.id === secondHotel?.id ?

                                                    < g
                                                        onClick={() => HandleHoverButtonClick()}
                                                    >
                                                        <HashLink to="#HotelMap">
                                                            <path style={{ 'fill': secondColor }}

                                                                onClick={() => HandleHoverButtonClick()}

                                                                onMouseEnter={() => handleSelectValue(secondHotel)} class="st8" d="M588.92,42.95c-57.34,16.03-113.76,38.87-168.17,68.84c-39.72,21.88-76.79,46.69-111.12,74.01L800,800
		L588.92,42.95z"/>   </  HashLink>

                                                        <text transform="matrix(0.4474 0.8943 -0.8943 0.4474 466.4596 161.7588)" class="st1 st11 st12">{secondHotel?.name?.substr(0, 32)}</text>


                                                    </g>
                                                    : <p></p>
                                            }


                                            {
                                                selectedHotel?.id === thirdHotel?.id ?

                                                    < g
                                                        onClick={() => HandleHoverButtonClick()}
                                                    >
                                                        <HashLink to="#HotelMap">
                                                            <path style={{ 'fill': thirdColor }}
                                                                class="st6" d="M360.51,148.44c-36.45,24.64-71.32,52.68-104.18,84.13c-45.12,43.2-83.96,90.5-116.52,140.73L800,800
		L360.51,148.44z"/>

                                                        </  HashLink>

                                                        <text transform="matrix(0.7302 0.6833 -0.6833 0.7302 260.2603 300.6519)" class="st1 st11 st12">{thirdHotel?.name?.substr(0, 32)}</text>

                                                    </g>
                                                    : <p></p>
                                            }

                                            {
                                                selectedHotel?.id === fourthHotel?.id ?

                                                    < g onClick={() => HandleHoverButtonClick()} >
                                                        <HashLink to="#HotelMap">
                                                            <path style={{ 'fill': fourthColor }} onMouseEnter={() => handleSelectValue(fourthHotel)} class="st4" d="M180.62,316.09C115.95,398.61,69.87,491.56,42.77,588.99L800,800L180.62,316.09z" />
                                                        </  HashLink>
                                                        <text transform="matrix(0.9016 0.4326 -0.4326 0.9016 126.0891 484.2914)" class="st1 st11 st12">{fourthHotel?.name?.substr(0, 32)}</text>


                                                    </g>
                                                    : <p></p>
                                            }

                                            {
                                                selectedHotel?.id === fifthHotel?.id ?

                                                    < g onClick={() => HandleHoverButtonClick()} >
                                                        <HashLink to="#HotelMap">
                                                            <path style={{ 'fill': fifthColor }} onMouseEnter={() => handleSelectValue(fifthHotel)} class="st0" d="M72.22,501.27c-37.85,92.09-58.73,192.94-58.73,298.67c0,0.12,0,0.24,0,0.36l786.12-0.36L72.22,501.27z" />
                                                        </  HashLink>
                                                        <text transform="matrix(0.9831 0.1831 -0.1831 0.9831 72.7204 672.8367)" class="st1 st11 st12">{fifthHotel?.name?.substr(0, 32)}</text>


                                                    </g>
                                                    : <p></p>
                                            }
                                        </g>

                                        {/* hover Button  */}



                                        < g onClick={() => spinRightHotel(document, 5)} className='spinnerButton'>
                                            <path class="st13" d="M270.78,184.88l-49.97,39.06c-20.46,18.85-79.64,163.85-99.9,141.85l-63.98-72.79
	c-20.26-21.99-20.09-55.41,0.37-74.26L252.19,65.11c20.46-18.85,41.71-24.4,61.97-2.41l39.82,52.01
	C359.17,180.8,289.64,170.72,270.78,184.88z"/>
                                            <path style={{ 'fill': '#3d1a6f' }} class="st1" d="M324.66,116.58c8.69,0.06,15.88,3.32,23.49,4.5c2.38,0.37,3.12,2.83,2.68,4.9
		c-2.4,11.27-6.33,21.81-15.47,29.57c-2.66,2.26-4.66,2.59-5.48-1.77c-0.59-3.11-2.02-6.06-2.72-9.16c-1.25-5.52-4.4-7.13-9.55-5.12
		c-29.64,11.55-58.89,24.59-81.6,47.22c-26.46,26.36-51.68,54.16-69.29,87.74c-8.87,16.91-20.73,32.16-27.99,49.95
		c-4.28,10.49-7.97,21.21-12.14,31.75c-0.74,1.87-0.95,5.65-3.8,4.67c-2.7-0.93-2.71-4.19-1.93-7.14
		c4.33-16.33,10.07-32.25,17.92-47.1c15.11-28.54,29.29-58.01,51.65-81.72c13.93-14.77,25.52-31.81,41.09-44.81
		c24.39-20.36,51.32-36.85,81.98-46.27c6.04-1.85,8.39-4.76,6.77-10.73C319.01,118.37,320.3,115.93,324.66,116.58z"/>
                                            <path style={{ 'fill': '#3d1a6f' }} class="st1" d="M143.78,205.37c-6.51,0.82-12.11,1.88-17.75,2.13c-5.75,0.26-8.6-3.29-7.04-8.75c1.98-6.95,4.44-13.78,7-20.54
		c0.77-2.03,2.41-3.84,4-5.41c2.09-2.08,4.97-3.16,7.16-0.65c2.08,2.39,2.52,5.84-0.73,7.73c-6.28,3.65-7.33,10.02-9.26,16.02
		c-1.03,3.19-0.12,4.13,3.26,3.42c3.32-0.69,6.78-1.12,10.17-1.09c7.75,0.07,12.22,6.09,9.75,13.42
		c-2.18,6.47-5.36,12.54-9.26,18.18c-1.88,2.72-4.93,4.19-7.64,2.43c-3.11-2.03-0.76-4.85,0.63-7.13c2.25-3.69,4.84-7.18,6.82-11
		C142.21,211.58,142.74,208.62,143.78,205.37z"/>
                                            <path style={{ 'fill': '#3d1a6f' }} class="st1" d="M203.63,138.55c7.36,1.63,15.24,3.76,22.36,7.98c1.09,0.65,2.84,1.99,1.78,3.89
		c-1.03,1.85-3.11,2.24-4.82,1.77c-4.8-1.33-9.5-3.03-14.24-4.59c-7.27-2.4-9.07-1.15-9.17,6.38c-0.01,0.46,0.07,0.91,0.05,1.37
		c-0.12,3.56-0.45,8.53-4.03,8.68c-4.34,0.19-5.7-5.18-7.71-8.68c-0.11-0.18-0.14-0.43-0.14-0.65
		C187.77,151.63,199.82,138.91,203.63,138.55z"/>
                                            <path style={{ 'fill': '#3d1a6f' }} class="st1" d="M188.66,177.16c0.05,2.13-0.3,3.86-1.72,4.65c-1.26,0.7-2.71-0.29-3.64-1.25c-4.25-4.37-7.57-9.59-12.43-13.45
		c-1.09-0.86-1.07-3.24,0.29-4.33c1.91-1.54,4.54-1.63,6.42-0.33C182.96,166.18,185.23,172.34,188.66,177.16z"/>
                                            <path style={{ 'fill': '#3d1a6f' }} class="st1" d="M163.9,142.55c-0.33-2.82-0.14-5.58,3.08-5.98c4.01-0.5,2.88,3.17,3.52,5.28c1.09,3.6-1.85,4.55-4.1,4.88
		C163.09,147.21,164.68,143.91,163.9,142.55z"/>
                                            <path style={{ 'fill': '#3d1a6f' }} class="st1" d="M174.28,209.3c-0.3-1.27-1.02-2.54-1.85-3.57c-5.26-6.48-8.08-13.32-3.85-21.52c0.6-1.16,0.63-2.64,0.79-3.99
		c0.41-3.33-1.18-5.92-3.92-7.31c-2.75-1.4-5.72-0.98-8.19,1.25c-3.79,3.41-5.57,7.62-5.24,12.74c0.15,1.35-0.22,3.3,0.54,3.94
		c7.08,6,10.21,14.8,15.86,21.77c0.84,1.04,2.46,2.54,4.09,1.53C174.14,213.13,174.72,211.17,174.28,209.3z M162.3,185.87
		c-2.25-0.22-4-1.41-4.08-3.69c-0.07-2.08,0.9-4.18,3.45-4.31c2.35-0.12,3.81,1.15,4.07,3.63
		C166.01,184.06,164.57,185.22,162.3,185.87z"/>
                                        </g>





                                    </svg>



                                    <svg version="1.1" id="newSVG" x="0px" y="0px"
                                        viewBox="0 0 700 700" >
                                        <g onClick={() => spinRightHotel(document, 5)} className='spinnerButton' >
                                            <path class="st0" d="M148.46,64.05l-88.06,81.11c-9.65,8.89-24.82,8.27-33.71-1.39l-13.92-15.11c-8.89-9.65-8.27-24.82,1.39-33.71
		l88.06-81.11c9.65-8.89,24.82-8.27,33.71,1.39l13.92,15.11C158.73,39.99,158.11,55.16,148.46,64.05z"/>
                                            <g>
                                                <path class="st1" d="M133.22,45.18c3.96,0.03,7.24,1.51,10.71,2.05c1.08,0.17,1.42,1.29,1.22,2.24
			c-1.09,5.14-2.88,9.95-7.05,13.48c-1.22,1.03-2.13,1.18-2.5-0.81c-0.27-1.42-0.92-2.76-1.24-4.18c-0.57-2.52-2.01-3.25-4.35-2.34
			c-13.52,5.27-26.86,11.22-37.21,21.53c-12.07,12.02-23.57,24.7-31.6,40.01c-4.05,7.71-9.45,14.67-12.76,22.78
			c-1.95,4.78-3.64,9.67-5.54,14.48c-0.34,0.85-0.43,2.58-1.73,2.13c-1.23-0.42-1.24-1.91-0.88-3.26
			c1.97-7.45,4.59-14.71,8.17-21.48c6.89-13.02,13.36-26.45,23.56-37.27c6.35-6.73,11.64-14.51,18.74-20.44
			c11.12-9.29,23.4-16.81,37.39-21.1c2.75-0.85,3.82-2.17,3.09-4.89C130.65,46,131.23,44.89,133.22,45.18z"/>
                                                <path class="st1" d="M50.73,85.68c-2.97,0.37-5.52,0.86-8.1,0.97c-2.62,0.12-3.92-1.5-3.21-3.99c0.9-3.17,2.02-6.29,3.19-9.37
			c0.35-0.92,1.1-1.75,1.82-2.47c0.95-0.95,2.27-1.44,3.27-0.29c0.95,1.09,1.15,2.66-0.33,3.52c-2.86,1.66-3.34,4.57-4.22,7.31
			c-0.47,1.46-0.05,1.88,1.48,1.56c1.52-0.32,3.09-0.51,4.64-0.5c3.53,0.03,5.57,2.78,4.45,6.12c-0.99,2.95-2.45,5.72-4.22,8.29
			c-0.86,1.24-2.25,1.91-3.48,1.11c-1.42-0.93-0.34-2.21,0.29-3.25c1.02-1.68,2.21-3.28,3.11-5.02
			C50.02,88.51,50.26,87.16,50.73,85.68z"/>
                                                <path class="st1" d="M78.03,55.21c3.35,0.74,6.95,1.72,10.2,3.64c0.5,0.3,1.29,0.91,0.81,1.77c-0.47,0.85-1.42,1.02-2.2,0.81
			c-2.19-0.61-4.33-1.38-6.49-2.09c-3.32-1.09-4.14-0.52-4.18,2.91c0,0.21,0.03,0.42,0.02,0.62c-0.06,1.62-0.2,3.89-1.84,3.96
			c-1.98,0.09-2.6-2.36-3.52-3.96c-0.05-0.08-0.06-0.2-0.06-0.3C70.79,61.17,76.29,55.37,78.03,55.21z"/>
                                                <path class="st1" d="M71.2,72.81c0.02,0.97-0.14,1.76-0.79,2.12c-0.57,0.32-1.23-0.13-1.66-0.57c-1.94-1.99-3.45-4.37-5.67-6.13
			c-0.5-0.39-0.49-1.48,0.13-1.98c0.87-0.7,2.07-0.74,2.93-0.15C68.6,67.8,69.64,70.62,71.2,72.81z"/>
                                                <path class="st1" d="M59.91,57.03c-0.15-1.29-0.06-2.54,1.4-2.73c1.83-0.23,1.31,1.45,1.6,2.41c0.5,1.64-0.84,2.07-1.87,2.22
			C59.54,59.15,60.26,57.65,59.91,57.03z"/>
                                                <path class="st1" d="M64.64,87.47c-0.14-0.58-0.47-1.16-0.85-1.63c-2.4-2.96-3.68-6.07-1.75-9.81c0.27-0.53,0.29-1.2,0.36-1.82
			c0.19-1.52-0.54-2.7-1.79-3.33c-1.25-0.64-2.61-0.45-3.74,0.57c-1.73,1.56-2.54,3.48-2.39,5.81c0.07,0.61-0.1,1.51,0.24,1.8
			c3.23,2.73,4.66,6.75,7.24,9.93c0.38,0.47,1.12,1.16,1.87,0.7C64.58,89.21,64.84,88.32,64.64,87.47z M59.18,76.78
			c-1.02-0.1-1.83-0.64-1.86-1.68c-0.03-0.95,0.41-1.91,1.58-1.97c1.07-0.05,1.74,0.52,1.85,1.66
			C60.87,75.96,60.21,76.49,59.18,76.78z"/>
                                            </g>
                                        </g>
                                        <path class="st2" d="M146.78,623.48c0.27,0.2,0.55,0.4,0.82,0.6L350.77,350L146.78,623.48z" />
                                        <path class="st2" d="M350.77,350l204.8,272.87c0.12-0.09,0.23-0.18,0.35-0.27L350.77,350z" />
                                        <path class="st2" d="M674.63,242.52c-0.32-0.95-0.63-1.9-0.95-2.85L350.77,350L674.63,242.52z" />



                                        <g>
                                            <path style={{ 'fill': firstColor }} class="st3" d="M27.43,240.92L350.77,350V8.84C200.5,8.84,72.92,106,27.43,240.92z" />
                                            <text transform="matrix(0.4779 0.8784 -0.8784 0.4779 189.1106 71.106)" class="st1 st4 st5">{firstHotel?.name?.substr(0, 32)}</text>
                                        </g>
                                        <g>
                                            <path style={{ 'fill': secondColor }} class="st6" d="M27.43,240.92C15.87,275.17,9.61,311.85,9.61,350c0,111.93,53.9,211.27,137.17,273.48L350.77,350L27.43,240.92
		z"/>
                                            <text transform="matrix(0.9812 -0.1928 0.1928 0.9812 49.6753 415.8717)" class="st1 st4 st5">{secondHotel?.name?.substr(0, 32)}</text>
                                        </g>
                                        <g>
                                            <path style={{ 'fill': thirdColor }} class="st7" d="M350.77,8.84V350l322.91-110.33C627.82,105.4,500.57,8.84,350.77,8.84z" />
                                            <text transform="matrix(-0.5374 0.8433 -0.8433 -0.5374 529.2938 82.3397)" class="st1 st4 st5">{thirdHotel?.name?.substr(0, 32)}</text>
                                        </g>
                                        <g>
                                            <path style={{ 'fill': fourthColor }} class="st8" d="M555.92,622.6c82.6-62.26,136.01-161.19,136.01-272.6c0-37.56-7.04-76.54-18.25-110.33L350.77,350
		L555.92,622.6z"/>
                                            <text transform="matrix(-0.9448 -0.3275 0.3275 -0.9448 648.1838 445.7568)" class="st1 st4 st5">{fourthHotel?.name?.substr(0, 32)}</text>
                                        </g>
                                        <g>
                                            <path style={{ 'fill': fifthColor }} class="st9" d="M147.6,624.08c56.76,42.14,127.05,67.08,203.17,67.08c76.85,0,147.76-25.42,204.8-68.29L350.77,350
		L147.6,624.08z"/>
                                            <text transform="matrix(0.0365 -0.9993 0.9993 0.0365 351.5864 647.6546)" class="st1 st4 st5">{fifthHotel?.name?.substr(0, 32)}</text>
                                        </g>
                                    </svg>






                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {


                allPagesVisibility ?
                    <>
                        <HotelMapGostDiv></HotelMapGostDiv>
                        <HotelMap HotelData={selectedHotel}></HotelMap>
                        <HotelSlider HotelData={selectedHotel}></HotelSlider>
                        <HotelDepartments HotelData={selectedHotel} />
                    </>
                    : <>
                        <Footer />
                    </>
            }

        </>
    );
};

export default Test;