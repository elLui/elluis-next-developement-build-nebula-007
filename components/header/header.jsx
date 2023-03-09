import styled from "styled-components";




function Box() {
	return null;
}

const HeaderSection = styled.div`
  .header {
    .posts {
      width: 90%;
      max-width: 60rem;
      margin: var(--size-8) auto;
    }

    .posts h1 {
      font-size: var(--size-8);
      color: var(--color-grey-800);
      text-align: center;
    }

    @media (min-width: 768px) {
      .posts h1 {
        font-size: var(--size-16);
      }
    }

    .box {
      width: 75px;
      height: 75px;
      border-radius: 12px;
      align-items: center;
      justify-content: center;
      text-align: center;
      background-color: var(--green);
      font-weight: 600;
      color: var(--light);

      display: block;
    }

  }

`;




export default function Header() {
	
	
	gsap.to( ".box", { duration: 1, x: 200, rotation: 360, ease: "power2.out" } );
	
	return (
		
		<HeaderSection className={ styles.header }>
			
			<div className="box green">
				
				<Box/>
			
			</div>
		
		</HeaderSection> );
}