// ArchiveC.tsx
import React from 'react';
import './ArchiveC.css';
import profile from '../../assets/img/archive/profileimg.png';
import feed1 from '../../assets/img/archive/feed1.png';
import feed2 from '../../assets/img/archive/feed2.png';
import feed3 from '../../assets/img/archive/feed3.png';
import feed4 from '../../assets/img/archive/feed4.png';
import feed5 from '../../assets/img/archive/feed5.png';
import feed6 from '../../assets/img/archive/feed6.png';
import feed7 from '../../assets/img/archive/feed7.png';
import feed8 from '../../assets/img/archive/feed8.png';

interface FeedItem {
  id: number;
  text: string;
  time: string;
  img: string;
}

const feeds: FeedItem[] = [
  { id: 1, text: '로희 목소리 진짜 너무 좋아서 계속 듣게 돼... 플레이리스트에 추가 완료 🎧 !!', time: '1시간 전', img: feed1 },
  { id: 2, text: '이 무대는 그냥 소장각... 진짜 눈 뗄 수 없었다 집가서 또 봐야지', time: '2시간 전', img: feed2 },
  { id: 3, text: 'bomb 무대 봤는데 너무 멋있었어 👏 무대 장인들 인정', time: '1주 전', img: feed3 },
  { id: 4, text: '역시 블랙핑크... 진짜 매번 레전드 갱신하는 듯 ㅎㅎ', time: '1주 전', img: feed4 },
  { id: 5, text: '오늘도 로하 영상 보면서 힘내는 중 💝 덕분에 하루가 달라', time: '1주 전', img: feed5 },
  { id: 6, text: '블핑은 내 최애야 진심으로. 힘들 때마다 위로받는 느낌이야 ㅜㅜ', time: '1주 전', img: feed6 },
  { id: 7, text: '아일릿 bomb 활동 너무 멋졌어! 다같이 있는 무대는 진짜 최고였음 🔥', time: '2주 전', img: feed7 },
  { id: 8, text: '요즘 아일릿 보면서 빠져들고 있음... 비주얼이랑 실력 둘 다 갖췄다', time: '3주 전', img: feed8 },
];

const ArchiveC: React.FC = () => {
  return (
    <div className="artist-c-wrapper">
      {feeds.map(feed => (
        <div className="feed-card" key={feed.id}>
          <div className="feed-header">
            <img src={profile} alt="프로필" className="feed-profile" />
            <div className="feed-info">
              <p className="feed-text">{feed.text}</p>
              <p className="feed-time">{feed.time}</p>
            </div>
          </div>
          <img src={feed.img} alt="게시물" className="feed-img" />
        </div>
      ))}
    </div>
  );
};

export default ArchiveC;
