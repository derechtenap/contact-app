import {
  ActionIcon,
  Avatar,
  Flex,
  NavLink,
  Stack,
  Text,
  TextInput,
  rem,
} from "@mantine/core";
import {
  IconCalendar,
  IconCalendarEvent,
  IconCalendarPlus,
  IconChecklist,
  IconSearch,
  IconSettings,
  IconStar,
  IconUsersGroup,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";

const iconStyles = { height: rem(16), width: rem(16) };

export const navbarItems = [
  {
    icon: <IconCalendarEvent style={iconStyles} />,
    name: "Today",
    href: "/",
  },
  {
    icon: <IconUsersGroup style={iconStyles} />,
    children: {
      icon: <IconCalendarPlus style={iconStyles} />,
      name: "New Calendar Event",
      href: "#",
    },
    name: "Contacts",
    href: "/contacts",
  },
  {
    icon: <IconCalendar style={iconStyles} />,
    children: {
      icon: <IconCalendarPlus style={iconStyles} />,
      name: "New Event",
      href: "#",
    },
    name: "Calendar",
    href: "/calendar",
  },
  {
    icon: <IconStar style={iconStyles} />,
    name: "Favorites",
    href: "/favorites",
  },
  {
    icon: <IconChecklist style={iconStyles} />,
    name: "Tasks & Todos",
    href: "/tasks",
  },
];

const RootNavbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <Stack h="100%" m="md">
      <Stack h="100%">
        <TextInput
          leftSection={<IconSearch style={iconStyles} />}
          placeholder="Search..."
          type="search"
        />
        {navbarItems.map((item) => (
          <>
            {/* If item has children return nested nav link component  */}
            {item.children ? (
              <NavLink
                leftSection={item.icon}
                component={Link}
                href={item.href}
                key={item.name}
                label={item.name}
                childrenOffset={10}
              >
                <NavLink
                  leftSection={item.children.icon}
                  component={Link}
                  href={item.children.href}
                  label={item.children.name}
                />
              </NavLink>
            ) : (
              <NavLink
                active={currentRoute === item.href}
                leftSection={item.icon}
                component={Link}
                href={item.href}
                key={item.name}
                label={item.name}
                childrenOffset={5}
              />
            )}
          </>
        ))}
      </Stack>
      <Flex align="center" gap="md">
        <Avatar color="orange">JD</Avatar>
        <Text fw="bold">John Doe</Text>
        <ActionIcon ml="auto" variant="transparent">
          <IconSettings />
        </ActionIcon>
      </Flex>
    </Stack>
  );
};

export default RootNavbar;
