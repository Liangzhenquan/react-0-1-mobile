/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-20 17:11:49
 * @LastEditors: liang
 * @LastEditTime: 2020-07-31 13:59:57
 */
import 'whatwg-fetch';
import { useRequest } from 'ahooks';
import { Toast } from 'antd-mobile';
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
export let cancelFetch = {};
const promiseTimeout = (fetch) => {
  const TIME = 20000;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('请求超时');
    }, TIME);
  });
  const controller = new AbortController();
  return Promise.race([promise, fetch(controller)]).catch((err) => {
    controller.abort();
    Toast.offline(err, 1);
  });
};
const originFetch = fetch;
Object.defineProperty(window, 'fetch', {
  configurable: true,
  enumerable: true,
  // writable: true,
  get() {
    return (url, options = {}) => {
      const { signal } = options.controller;
      cancelFetch[url] = options.controller;
      return originFetch(url, {
        ...options,
        signal,
        ...{
          headers: {
            token: localStorage.getItem('token')
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
  promiseTimeout((controller) =>
    fetch(url, { controller, body: JSON.stringify(body), method: 'POST' })
  );
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
  return promiseTimeout((controller) => fetch(path, { controller }));
};
const usePost = (url, config) => {
  const urlPath = process.env.NODE_ENV === 'development' ? '/v2' + url : url;
  return useRequest((params) => post(urlPath, params), config);
};
const useGet = (url, config) => {
  const urlPath = process.env.NODE_ENV === 'development' ? '/v2' + url : url;
  return useRequest((params) => get(urlPath, params), config);
};
export { usePost, useGet };
