import { Popover, Text, Button } from '@mantine/core';

export default function StarterButton() {
    return (
        <Popover width={200} position="top" withArrow shadow="md" offset={10}>
            <Popover.Target>
                <Button variant="outline" color="blue">
                    Tung
                </Button>
            </Popover.Target>
            <Popover.Dropdown>
                <Text 
                    size="xl" 
                    fw={900} 
                    variant="gradient" 
                    gradient={{from: 'blue', to: 'red', deg: 90}}
                >
                    Tung Tung Sahur
                </Text>
            </Popover.Dropdown>
        </Popover>
    )
}