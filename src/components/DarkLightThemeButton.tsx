import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { FiSun } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";


const DarkLightThemeButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const light = colorScheme === "light";

  return (
    <ActionIcon
      variant="outline"
      color={light ? "yellow" : "blue"}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {light ? <FiSun size={18} /> : <BsMoonStars size={18} />}
    </ActionIcon>
  );
};

export default DarkLightThemeButton;
