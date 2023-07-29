import { memo, useEffect, useState } from "react";

import type { FC } from "react";

interface SubNavProps {
  subNavList: { label: string }[];
  activeIndex: number;
}

const SubNav: FC<SubNavProps> = (props) => {
  const { subNavList = [], activeIndex } = props;

  const [navIndex, setNavIndex] = useState(0);

  const handleNavClick = (index: number) => {
    setNavIndex(index);
  };

  useEffect(() => {
    if (activeIndex === 0) {
      return setNavIndex(0);
    }
  }, [activeIndex]);

  return (
    <nav className="bg-orange-700">
      <ul className="w-[1100px] m-auto flex items-center text-xs pl-[180px]">
        {subNavList.map((item, index) => (
          <li
            key={item.label}
            className="px-4 py-2 cursor-pointer"
            onClick={() => handleNavClick(index)}
          >
            <span
              className={`px-3 py-1 rounded-[20px] hover:bg-red-900 ${
                navIndex === index ? "bg-red-900" : ""
              }`}
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default memo(SubNav);
