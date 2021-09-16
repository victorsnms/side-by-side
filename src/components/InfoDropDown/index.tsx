import {
	AccordionItem,
	AccordionButton,
	Box,
	AccordionIcon,
	AccordionPanel,
	AccordionItemProps
} from "@chakra-ui/react"

interface InfoDropDownProps extends AccordionItemProps {
	title: string
	content: string
}

export const InfoDropDown = ({ title, content, ...rest }: InfoDropDownProps) => (
	<AccordionItem {...rest}> 
		<AccordionButton>
			<Box 
				flex="1" 
				textAlign="left" 
				as="h3"
				p='3'
			>
				{title}
			</Box>
			<AccordionIcon />
		</AccordionButton>
		<AccordionPanel p="4">{content}</AccordionPanel>
	</AccordionItem>
)
