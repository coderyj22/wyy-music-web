import { useState } from 'react';
import { history, Link } from 'umi';
import style from './index.less';

export default function Header() {
  // const nav2 = [
  //   { title: '推荐', router: '' },
  //   { title: '排行榜', router: '/discover/toplist' },
  //   { title: '歌单', router: '/discover/playlist' },
  //   { title: '主播电台', router: '/discover/djradio' },
  //   { title: '歌手', router: '/discover/artist' },
  //   { title: '新碟上架', router: '/discover/album' },
  // ];
  const nav1 = [
    { title: '发现音乐', route: '/discover' },
    { title: '我的音乐', route: '/my' },
    { title: '关注', route: '/friend' },
    { title: '商城', link: 'https://music.163.com/store/product' },
    { title: '音乐人', link: 'https://music.163.com/st/musician' },
    { title: '下载客户端', route: '/download' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div>
      <div className={style.header}>
        <div className={style.top + ' wrap'}>
          <h1 className={style.logo}>
            <div></div>
          </h1>
          <ul className={style.ulHeader}>
            {nav1.map((item, index) => {
              return (
                <>
                  {item.route && (
                    <li
                      key={item.title}
                      onClick={() => {
                        setCurrentIndex(index);
                        history.push(item.route);
                      }}
                    >
                      <a
                        style={{
                          backgroundColor: currentIndex == index ? '#000' : '',
                        }}
                      >
                        {item.title}
                      </a>
                      {index == 5 ? <span className={style.hot}></span> : ''}
                    </li>
                  )}
                  {item.link && (
                    <li key={item.title}>
                      <a href={item.link}>{item.title}</a>
                    </li>
                  )}
                </>
              );
            })}
          </ul>
          <div className={style.behind}>
            <div className={style.search}>搜索</div>
            <div className={style.createAuthor}>
              <div>创作者中心</div>
            </div>
            <div className={style.login}>登陆</div>
          </div>
        </div>
      </div>
    </div>
  );
}
