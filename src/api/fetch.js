/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-20 17:11:49
 * @LastEditors: liang
 * @LastEditTime: 2020-07-22 17:05:40
 */
import 'whatwg-fetch';
import { useRequest } from 'ahooks';
const handleStatus = (statu) => {
  switch (statu) {
    case 400:
      console.log('参数丢失');
      break;
    case 500:
      console.log('系统繁忙');
      break;
    default:
      break;
  }
};
const originFetch = fetch;
Object.defineProperty(window, 'fetch', {
  configurable: true,
  enumerable: true,
  // writable: true,
  get() {
    return (url, options = {}) => {
      return originFetch(url, {
        ...options,
        ...{
          headers: {
            token: localStorage.getItem('token') || 'Bearer test'
          },
          ...options.headers
        }
      })
        .then((res) => {
          handleStatus(res.status);
          return res;
        })
        .then((res) => res.json())
        .catch(() => {});
    };
  }
});

const post = (url, body) =>
  fetch(url, { body: JSON.stringify(body), method: 'POST' });
const get = (url, body) => {
  let path = url;
  if (body) {
    const query = Object.entries(body).reduce((p, [key, value]) => {
      let str = '&';
      if (p === '?') str = '';
      return `${p}${str}${key}=${value}`;
    }, '?');
    path = url + query;
  }
  return fetch(path);
};
const usePost = (url, config) => {
  return useRequest((params) => post(url, params), config);
};
const useGet = (url, config) => {
  return useRequest((params) => get(url, params), config);
};
export { usePost, useGet };
