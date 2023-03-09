"use client";
import Image from "next/image";
import user_image_placeholder from "../../public/assets/images/11.png";
import styled from "styled-components";




const HeroSectionStyles = styled.section`
  .hero {
    text-align: center;
    background-image: linear-gradient(to bottom,
    var(--color-grey-900),
    var(--color-grey-800));
    padding: var(--size-8) 0;
  }

  .image {
    width: 300px;
    height: 300px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    overflow: hidden;
    background-color: var(--color-grey-700);
    margin: auto;
  }

  .image img {
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
  }

  .hero h1 {
    font-size: var(--size-16);
    margin: var(--size-4) 0;
    color: var(--color-grey-300);
  }

  .hero p {
    font-size: var(--size-6);
    color: var(--color-grey-200);
    width: 90%;
    max-width: 40rem;
    margin: auto;
  }

`;



export default function Hero() {
	
	
	return (
		
		<section className="hero">
			<h3>a place</h3>
			
			
			<div className="image">
				{/* <Image src={ user_image_placeholder } alt={ "user image placeholder" } width={ 1920 } height={ 1080 }/> */ }
			</div>
			
			<h1>elluis.codes</h1>
			
			
			<p>to think</p>
			<p>of things</p>
		</section>
	
	);
	
	
	
}