import { useState } from "react";

// eslint-disable-next-line react/prop-types
function HeaderButton({ children, onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={onClick}
      className="py-3 px-8 white text-xl hover:scale-105 transition ease-in-out duration-150"
      style={{
        textShadow: hover ? "0 0 20px orange" : "0 0 10px orange",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      /* style={{
                    my: 2,
                    mx: 1,
                    color: "white",
                    display: "block",
                    textTransform: "capitalize",
                    fontSize: "20px",
                    textShadow: "0 0 10px orange",
                    hover: {
                      fontSize: "22px",
                      textShadow: "0 0 15px orange",
                    },
                  }} */
    >
      {children}
    </div>
  );
}

export default HeaderButton;
