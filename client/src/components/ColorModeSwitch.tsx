import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"

const ColorModeSwitch = () => {

    const {toggleColorMode, colorMode} = useColorMode();


  return (
    <>
        <HStack justifyContent={"end"} m={5}>
            {/* NOTICE LIGHT AND DARK MODE TOGGLE AND TURNERY */}
            {/* <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}/> */}
            {colorMode === 'dark' ? <Text whiteSpace={"nowrap"}><MoonIcon onClick={toggleColorMode} m={3} cursor={"pointer"} />Dark</Text> : <Text whiteSpace={"nowrap"}><SunIcon onClick={toggleColorMode} m={3} cursor={"pointer"} />Light</Text> }
        </HStack>
    </>
  )
}

export default ColorModeSwitch