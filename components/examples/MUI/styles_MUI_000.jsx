"use client"
import { Box } from "@mui/material";
import { TrendingUp } from "@mui/icons-material";


import { styled } from '@mui/material/styles';

const Div = styled('div')``;



export default function StylesMui000() {


	return (

		<Box
			sx={ {
				bgcolor : 'background.paper',
				boxShadow : 1,
				borderRadius : 1,
				p : 2,
				minWidth : 300,
			} }
		>
			<Box sx={ { color : 'text.secondary' } }>Sessions</Box>
			<Box sx={ { color : 'text.primary', fontSize : 34, fontWeight : 'medium' } }>
				98.3 K
			</Box>
			<Box
				component={ TrendingUp }
				sx={ { color : 'success.dark', fontSize : 16, verticalAlign : 'sub' } }
			/>
			<Box
				sx={ {
					color : 'success.dark',
					display : 'inline',
					fontWeight : 'medium',
					mx : 0.5,
				} }
			>
				18.77%
			</Box>
			<Box sx={ { color : 'text.secondary', display : 'inline', fontSize : 12 } }>
				vs. last week
			</Box>
		</Box>

	)
}