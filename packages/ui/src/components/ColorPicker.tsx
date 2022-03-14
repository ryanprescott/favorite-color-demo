import { Color } from "@ryanprescott/favorite-color-demo-shared"
import { Box, Button } from "@chakra-ui/react"

interface Props {
    colors?: Color[],
    onPick?: (color: Color) => void
}

export const ColorPicker = ({colors, onPick}: Props) => {

    if (colors) {
        return (<Box>
            {colors.map(
                color => (
                    <Button 
                        m={2}
                        bg={color.bgValue}
                        color={color.fgValue}
                        onClick={
                            () => {
                                if (onPick) onPick(color)
                            }
                        }>
                        <>{color.name}</>
                    </Button>
                )
            )}
        </Box>)
    } else {
        return null
    }

}