import LightSunIcon from "../assets/icon-sun-light.svg";
import LightMoonIcon from "../assets/icon-moon-light.svg";

export default function ToggleMode() {
  return (
    <>
      <div className="inline-flex gap-2 ml-auto">
        <img
          src={LightSunIcon}
          alt="Sun icon for light mode theme preference"
        />
        <input
          type="checkbox"
          defaultChecked
          className="toggle p-1 before:bg-white bg-purple border-0 checked:bg-purple checked:border-0"
        />
        <img
          src={LightMoonIcon}
          alt="Moon icon for dark mode theme preference"
        />
      </div>
    </>
  );
}
