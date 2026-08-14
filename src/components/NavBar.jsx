import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import moon from "/src/assets/images/icon-moon.svg";
import sun from "/src/assets/images/icon-sun.svg";
import logo from "/src/assets/images/logo.svg";

function NavBar() {
  const { theme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }
  return (
    <div
      className="max-w-7xl mx-auto 
      flex items-center justify-between 
      bg-white p-3 rounded-2xl
      dark:bg-[rgb(31,36,52)]"
    >
      <img src={logo} alt="" />
      <button
        className="p-3 rounded-xl bg-[rgb(238,238,238)] dark:bg-[rgb(47,53,76)]"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <img src={sun} /> : <img src={moon} />}
      </button>
    </div>
  );
}

export default NavBar;
