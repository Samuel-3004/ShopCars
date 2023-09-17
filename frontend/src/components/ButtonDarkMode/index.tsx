import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider/UserContext";

export const ButtonDarkMode = () => {
  const { darkMode, setDarkMode } = useContext(UserContext);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    localStorage.setItem("@darkMode", JSON.stringify(checked));
  };

  return (
    <DarkModeSwitch
      style={darkMode ? { color: "#19d6d2" } : { color: "#dbca0d" }}
      checked={darkMode}
      onChange={toggleDarkMode}
      size={30}
    />
  );
};
