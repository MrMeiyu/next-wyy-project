"use client";

import SubNav from "@/app/components/subNav";
import { memo, useState } from "react";

const _navList = [
  {
    label: "发现音乐",
    children: [
      {
        label: "推荐",
      },
      {
        label: "排行榜",
      },
      {
        label: "歌单",
      },
      {
        label: "主播电台",
      },
      {
        label: "歌手",
      },
      {
        label: "新碟上架",
      },
    ],
  },
  {
    label: "我的音乐",
    link: "",
  },
  {
    label: "关注",
  },
  {
    label: "商城",
  },
  {
    label: "音乐人",
  },
  {
    label: "云推歌",
  },
  {
    label: "下载客户端",
  },
];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [subNavList, setSubNavList] = useState(_navList[0].children ?? []);

  const handleOnClick = (item: any, index: number) => {
    setSubNavList(item.children);
    setActiveIndex(index);
  };

  return (
    <header className="w-full bg-stone-800 text-teal-100">
      <div className="w-[1100px] m-auto flex items-center text-sm text-white">
        <h1>
          <a href="/#" className="">
            Lium云音乐
          </a>
        </h1>
        <nav>
          <ul className="flex">
            {_navList.map((item, index) => (
              <li
                key={item.label}
                className={`px-5 py-6 cursor-pointer hover:bg-black hover:text-white ${
                  activeIndex === index ? "bg-black text-white" : ""
                }`}
                onClick={() => handleOnClick(item, index)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
        <input
          className="h-[32px] rounded-[32px] pl-[30px] w-[158px] text-xs"
          type="text"
          placeholder="音乐/视频/电台/用户"
        />
        <a
          href="/login?targetUrl=%2Fcreatorcenter"
          className="h-[32px] text-xs px-4 py-2 ml-4 border text-teal-100 hover:text-white border-neutral-700 hover:border-teal-100 rounded-[32px]"
        >
          创作者中心
        </a>
        <a
          href="#"
          className="ml-5 text-teal-100 hover:text-teal-200 text-xs text-stone-500 hover:underline underline-offset-1"
        >
          登录
        </a>
      </div>
      <SubNav subNavList={subNavList} activeIndex={activeIndex} />
    </header>
  );
};

export default memo(Header);
