// ==UserScript==
// @name         直播界面精简
// @namespace    xiongqi
// @version      1.2
// @description  斗鱼,战旗直播界面精简,持续更新中
// @author       XiongQi
// @match        https://www.douyu.com/*
// @match        https://www.zhanqi.tv/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  /******************************/
  const liveConf = {
    douyu: 'www.douyu.com',
    zhanqi: 'www.zhanqi.tv',
  };
  const clearDOM = function(id) {
    const child = document.body.children;
    const leng = document.body.children.length;
    const body = document.body;
    const list = [];
    for (let i = 0; i < leng; i++)
      if (child.item(i).tagName === 'DIV' && child.item(i).id !== id) list.push(child.item(i));
    list.forEach(x => body.removeChild(x));
  };
  const douyuFunc = {
    clearDOM() {
      clearDOM('container');
    },
    videoUI() {
      const container = document.getElementById('container');
      const header = document.getElementById('header');
      const video = document.getElementById('js-live-room-normal-left');
      const mainbody = document.getElementById('mainbody');
      container.removeChild(document.getElementById('left'));
      header.style.position = 'relative';
      video.style.margin = '0';
      mainbody.innerHTML = '';
      mainbody.style.margin = '0';
      mainbody.style.padding = '10px 150px';
      mainbody.appendChild(video);
    },
  };
  const zhanqiFunc = {
    clearDOM() {
      clearDOM('js-room-super-panel');
    },
    videoUI() {
      // const room = document.getElementById('js-room-super-panel');
      const style = document.createElement('style');
      style.innerHTML =
        '.theatre .live-star-page .live-room-content .video-flash-cont{width: 100% !important;height:100% !important;}';
      document.body.appendChild(style);
      const bottom = document.getElementsByClassName('room-star-bottom-skin')[0];
      const bottom_ad = document.getElementsByClassName('live-stars-bottom')[0];
      bottom.removeChild(bottom_ad);
      const content = document.getElementsByClassName('live-star-content')[0];
      const chat = document.getElementById('js-right-chat-panel');
      content.removeChild(chat);
      const content_left_bottom = document.getElementsByClassName('left-area')[0];
      const content_left_bottom_ad = document.getElementsByClassName('left-bottom-area')[0];
      content_left_bottom.removeChild(content_left_bottom_ad);
      const video = document.getElementsByClassName('live-room-content')[0];
      video.style.width = '100%';
      const gift = document.getElementsByClassName('liveMessage')[0];
      gift.style.position = 'relative';
      gift.style.width = 'unset';
    },
  };
  window.onload = function() {
    switch (location.host) {
      case liveConf.douyu:
        douyuFunc.clearDOM();
        douyuFunc.videoUI();
        setTimeout(douyuFunc.clearDOM, 10000);
        break;
      case liveConf.zhanqi:
        zhanqiFunc.clearDOM();
        zhanqiFunc.videoUI();
        break;
      default:
        break;
    }
  };

  /******************************/
})();
