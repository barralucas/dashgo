import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Lucas Barra</Text>
                    <Text color="gray.300" fontSize="small">
                        lucastbarra@hotmail.com
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="Lucas Barra" src="https://github.com/lucastrindadebarra.png" />
        </Flex>
    );
}