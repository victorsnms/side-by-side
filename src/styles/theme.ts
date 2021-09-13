import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        green: {
            50: "#E3F2EF",
            70: "rgba(72, 135, 136, 0.5)",
            300: "#73C0B0",
            400: "#488788"
        },
        blue: {
            500: "#275D73"
        },
        brown: {
            100: "#E9E5C1",
            200: "#C9B36A"
        },
        gray: {
            50: "#F9F9F9",
            60: "#F3F2F2",
            100: "#DDDDDD",
            200: "#8C8C8C",
            400: "#6A6A6A",
            800: "#373737"
        },
        red: {
            500: "#FF2E00"
        }
    },
    fonts: {
        heading: "Didact Gothic",
        body: "Didact Gothic",
    },
    fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
    },
    styles: {
        global: {
            body: {
                bg: "gray.50",
                color: "black"
            },
        },
    },
});