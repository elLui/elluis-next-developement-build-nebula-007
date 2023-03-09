"use client";
import styled from "styled-components";




const FeaturedPostsSectionStyles = styled.section`


  .latest {
    width: 90%;
    max-width: 80rem;
    margin: var(--size-8) auto;
  }

  .latest h2 {
    font-size: var(--size-8);
    color: var(--color-grey-800);
    text-align: center;
  }

  @media (min-width: 768px) {
    .latest h2 {
      font-size: var(--size-16);
    }
  }
`;
export default function FeaturedPosts() {
	return (
		<FeaturedPostsSectionStyles>
			<h1>Featured Posts</h1>
			<br/>
			<p>we are THE MOTHER FUCKING FEATURED POSTS <strong>BITCHES!</strong></p>
		</FeaturedPostsSectionStyles>
	);
}