// ==UserScript==
// @name         斗鱼直播界面精简
// @namespace    xiongqi
// @version      1.0
// @description  直播界面精简
// @author       XiongQi
// @match        https://www.douyu.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  /******************************/
  const liveConf = {
    douyu: 'www.douyu.com',
  };
  const douyuFunc = {
    clearDOM() {
      const child = document.body.children;
      const leng = document.body.children.length;
      const body = document.body;
      const list = [];
      for (let i = 0; i < leng; i++)
        if (child.item(i).tagName === 'DIV' && child.item(i).id !== 'container') list.push(child.item(i));
      list.forEach(x => body.removeChild(x));
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
      mainbody.style.marginLeft = '0';
      mainbody.style.padding = '10px 150px';
      mainbody.appendChild(video);
    },
  };
  window.onload = function() {
    switch (location.host) {
      case liveConf.douyu:
        douyuFunc.clearDOM();
        douyuFunc.videoUI();
        setTimeout(douyuFunc.clearDOM, 10000);
        break;
      default:
        break;
    }
  };

  /******************************/
})();
