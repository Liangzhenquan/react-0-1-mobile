/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-21 15:24:58
 * @LastEditors: liang
 * @LastEditTime: 2020-07-31 14:01:05
 */
import { useGet } from './fetch';
import { toast } from 'antd-mobile';
const initialArray = [];
const inititalObj = {};
const inititalStr = '';
const inititalNum = 0;
/**
 * @description:
 * @param {
 *   res: 接口返回数据，code： 结果码， data：数据
 *   init: 期望返回的数据类型
 *   show: 是否展示res.code状态吗不符合期望时的提示，默认提示,传入onError不提示
 *   showSuccess: 是否展示res.code状态吗符合期望时的提示
 *   onSuccess: 自定义期望code的逻辑与返回,参数为res; (res) => {}
 *   onError: 自定义非期望code的逻辑，参数为res; (res) => {},未定义则使用antd的Toast提示消息
 * }
 * @return init or onSuccess
 * @author: liang
 */
const filterCode = ({
  res,
  init,
  onSucess,
  show = true,
  showSuccess = false,
  onError
} = {}) => {
  //是否是函数
  const isFunc = () => {
    return onSucess && typeof onSucess === 'function';
  };
  const errorIsFunc = () => {
    return onError && typeof onError === 'function';
  };
  try {
    if (res.code === '200000') {
      showSuccess && Toast.success(res.mesg);
      return isFunc() ? onSucess(res) : res.data;
    } else if (show) {
      errorIsFunc() ? onError(res) : Toast.fail(res.mesg);
    }
  } catch (err) {
    isFunc() ? onSucess(res) : console.log(err);
  }
  return init;
};
export const login = () => {
  return useGet('/v2/auth/login', {
    initialData: inititalObj,
    manual: true,
    formatResult: (res) => {
      return filterCode({
        res,
        init: inititalObj,
        showSuccess: true
      });
    }
  });
};
// 首页
export const getInfo = () => {
  return useGet('/index', {
    initialData: inititalObj
  });
};
// 获取活动列表

export const getCampList = () => {
  return useGet('/camp/search', {
    initialData: initialArray,
    loadMore: true,
    isNoMore: () => {}
  });
};
