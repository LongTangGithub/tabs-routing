import { Stack } from "expo-router"

/**
 * headerShown: false ---> Don't display the (tabs) 
 * @returns 
 */

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerTitle: 'Home Screen'}}/>
        </Stack>
    );
};

export default StackLayout;