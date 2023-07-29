const _navList = [
  {
    label: "音乐开放平台",
  },
  {
    label: "云村交易所",
  },
  {
    label: "Amped Studio",
  },
  {
    label: "X Studio虚拟歌手",
  },
  {
    label: "用户认证",
  },
  {
    label: "音乐交易平台",
  },
  {
    label: "云推歌",
  },
  {
    label: "赞赏",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-200 pb-[96px] text-xs border-t border-zinc-300">
      <div className="w-[980px] m-auto">
        <ul className="flex pt-8">
          {_navList.map((item, index) => (
            <li
              key={item.label}
              className={`${
                index === 0 ? "" : "ml-[80px]"
              } w-[45px] mt-2 text-center`}
            >
              <p className="w-[100px] ml-[-28px] text-black/[0.5]">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
        <div className="pt-16 text-center text-neutral-500 text-xs">
          <p>
            <a
              href="//st.music.163.com/official-terms/service"
              target="_blank"
              className=""
            >
              服务条款
            </a>
            <span className="mx-2 text-slate-300">|</span>
            <a
              href="//st.music.163.com/official-terms/privacy"
              target="_blank"
              className=""
            >
              隐私政策
            </a>
            <span className="mx-2 text-slate-300">|</span>
            <a
              href="//st.music.163.com/official-terms/children"
              target="_blank"
              className=""
            >
              儿童隐私政策
            </a>
            <span className="mx-2 text-slate-300">|</span>
            <a
              href="//music.163.com/st/staticdeal/complaints.html"
              target="_blank"
              className=""
            >
              版权投诉
            </a>
            <span className="mx-2 text-slate-300">|</span>
            <a href="http://ir.music.163.com" target="_blank" className="">
              投资者关系
            </a>
            <span className="mx-2 text-slate-300">|</span>
            <a
              href="https://music.163.com/ui/resource"
              rel="noopener noreferrer"
              target="_blank"
              className=""
            >
              广告合作
            </a>
            <span className="mx-2 text-slate-300">|</span>
            <a
              href="//mp.music.163.com/600948c936c13f4d09752e73/contact-us-web/index.html?source=Music-Main-Station"
              target="_blank"
              className="s-fc3"
            >
              联系我们
            </a>
          </p>
          <p>
            <a href="https://jubao.163.com" target="_blank">
              廉正举报
            </a>
            <span className="px-3">不良信息举报邮箱: xxx.xxx.com</span>
            <span>客服热线：xxxxxxx</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
