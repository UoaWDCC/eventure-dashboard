import { Popover, Image, Button } from '@mantine/core';

export default function StarterButton() {
    return (
        <Popover width={200} position="bottom" withArrow shadow="lg" offset={5}>
            <Popover.Target>
                <Button variant="outline" color="orange" ml="45%" w="10rem" mt="2rem">
                    Tung
                </Button>
            </Popover.Target>
            <Popover.Dropdown>
                 <Image src="/ttts.jpg" alt="tung tung tung sahur" bd="solid" />
            </Popover.Dropdown>
        </Popover>
    )
}