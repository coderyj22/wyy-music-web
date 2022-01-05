import style from './index.less';

export default function Discover() {
  const nav = [
    { title: '推荐', router: '' },
    { title: '排行榜', router: '/discover/toplist' },
    { title: '歌单', router: '/discover/playlist' },
    { title: '主播电台', router: '/discover/djradio' },
    { title: '歌手', router: '/discover/artist' },
    { title: '新碟上架', router: '/discover/album' },
  ];
  return (
    <div>
      <div className={style.navTop}>
        <div>
          <ul>
            {nav.map((item) => {
              return (
                <li>
                  <span>{item.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <h1 className={style.title}>发现音乐</h1>
    </div>
  );
}
