"use client";
import background_video from "../../public/assets/video/AdobeStock_255259620.mp4";
import styled from "styled-components";




const BackgroundVideoStyles = styled.div`

  .video__background {
    position: absolute;
    background-color: darkblue;
    background-attachment: scroll;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: fill;
    opacity: 0.5;
  }

  @keyframes play {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;



export default function BackgroundVideo() {
	
	
	
	let video__background;
	return (
		
		<BackgroundVideoStyles>
			{/* playsinline is needed for IOS */ }
			<video playsInline autoPlay muted loop className="video__background">
				<source src={ background_video } type={ "video/mp4" }/>
			</video>
		</BackgroundVideoStyles>
	
	);
	
}