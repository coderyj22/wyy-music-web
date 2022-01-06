import { useState } from 'react';
import { history, Link } from 'umi';
import style from './index.less';

export default function Header() {
  const nav1 = [
    { title: '发现音乐', route: '/discover' },
    { title: '我的音乐', route: '/my' },
    { title: '关注', route: '/friend' },
    { title: '商城', link: 'https://music.163.com/store/product' },
    { title: '音乐人', link: 'https://music.163.com/st/musician' },
    { title: '下载客户端', route: '/download' },
  ];
  const nav2 = [
    { title: '推荐', router: '/discover' },
    { title: '排行榜', router: '/discover/toplist' },
    { title: '歌单', router: '/discover/playlist' },
    { title: '主播电台', router: '/discover/djradio' },
    { title: '歌手', router: '/discover/artist' },
    { title: '新碟上架', router: '/discover/album' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
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
                        index != 0 ? setNextIndex(0) : '';
                      }}
                    >
                      <a
                        style={{
                          backgroundColor: currentIndex == index ? '#000' : '',
                        }}
                      >
                        <span>{item.title}</span>
                        <span
                          className={currentIndex == index ? style.current : ''}
                        ></span>
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
            <div className={style.search}>
              <div className={style.searchIcon}></div>
              <input className={style.input} type="text" />
            </div>
            <div className={style.createAuthor}>
              <div>创作者中心</div>
            </div>
            <a className={style.login}>登陆</a>
          </div>
        </div>
      </div>
      {/* 底部红色线条 */}
      <div className={style.hBottom}></div>
      {currentIndex == 0 && (
        <div className={style.navTop}>
          <div>
            <ul>
              {nav2.map((item, index) => {
                return (
                  <li>
                    <span
                      style={{
                        backgroundColor: nextIndex == index ? '#9b0909' : '',
                      }}
                      onClick={() => {
                        setNextIndex(index);
                        history.push(item.router);
                      }}
                    >
                      {item.title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
      <h1 className={style.title}>发现音乐</h1>
    </div>
  );
}
