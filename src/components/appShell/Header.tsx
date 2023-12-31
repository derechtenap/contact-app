import { ActionIcon, Flex, Group, Title } from "@mantine/core";
import {
  IconBell,
  IconLetterE,
  IconSquare,
  IconSquareX,
} from "@tabler/icons-react";
import pkg from "../../../package.json";
import Link from "next/link";

const RootHeader = () => {
  const APP_NAME = pkg.productName as string;
  return (
    <Flex align="center" justify="space-between" gap="xs" mx="xs" h="100%">
      <Group gap="xs">
        <Link href="/">
          <ActionIcon variant="light">
            <IconLetterE />
          </ActionIcon>
        </Link>
        <Title size="h4">{APP_NAME}</Title>
      </Group>
      <Group gap="xs">
        <ActionIcon color="dark" variant="transparent">
          <IconBell />
        </ActionIcon>
        <ActionIcon color="dark" variant="transparent">
          <IconSquare />
        </ActionIcon>
        <ActionIcon color="dark" variant="transparent">
          <IconSquareX />
        </ActionIcon>
      </Group>
    </Flex>
  );
};

export default RootHeader;
