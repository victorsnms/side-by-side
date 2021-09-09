import {
	AccordionItem,
	AccordionButton,
	Box,
	AccordionIcon,
	AccordionPanel,
} from "@chakra-ui/react"

interface InfoDropDownProps {
	title: string
	content: string
}

export const InfoDropDown = ({ title, content }: InfoDropDownProps) => (
	<AccordionItem>
		<AccordionButton>
			<Box flex="1" textAlign="left" as="h2">
				{title}
			</Box>
			<AccordionIcon />
		</AccordionButton>
		<AccordionPanel p="4">{content}</AccordionPanel>
	</AccordionItem>
)
