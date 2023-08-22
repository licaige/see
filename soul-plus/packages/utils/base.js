export const inBrowser = typeof window !== 'undefined';

export function isFunction(val) {
  return typeof val === 'function';
}

export function isObject(val) {
  return val !== null && typeof val === 'object';
}

export function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

// 从 obj 中挑选 keys 返回。 ignoreUndefined 为 true 时 忽略 undefined值
export function pick(obj, keys, ignoreUndefined) {
  return keys.reduce((ret, key) => {
    if (!ignoreUndefined || obj[key] !== undefined) {
      ret[key] = obj[key];
    }
    return ret;
  }, {});
}
