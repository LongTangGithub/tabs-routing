import { Stack } from "expo-router"

/**
 * headerShown: false ---> Don't display the (tabs) 
 * @returns 
 */

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='(tabs)' options={{ headerShown: false}}/>
        </Stack>
    )
}

export default StackLayout;