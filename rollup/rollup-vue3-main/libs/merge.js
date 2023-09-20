// merge object

/**
 * 深读拷贝合并目标对象
 * @returns
 */
export const mergeDeep = (...arr) => {
  let result;

  if (!isPlainObject((result = arr.shift()))) {
    result = {};
  }
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let item = arr[i];

    if (!isPlainObject(item)) {
      continue;
    }
    for (let key in item) {
      if (key === "__proto__" || key === "construcotr" || key === "prototype") {
        continue;
      }

      result[key] = recursiveMerge(result[key], item[key]);
    }
  }
  return result;
};

/**
 * 递归合并
 * @param {*} base
 * @param {*} extend
 * @returns
 */
export const recursiveMerge = (base, extend) => {
  if (base === undefined || base === null) {
    return clone(extend);
  }
  if (!isPlainObject(base)) {
    return [...base, ...extend];
  }

  for (let key in extend) {
    if (key === "__proto__" || key === "construcotr" || key === "prototype") {
      continue;
    }
    base[key] =
      isPlainObject(base[key]) && isPlainObject(extend[key])
        ? recursiveMerge(base[key], extend[key])
        : extend[key];
  }
  return base;
};

/**
 * 深克隆数据对象
 * @param {*} target
 * @returns
 */
export const clone = (target) => {
  if (Array.isArray(target)) {
    return target.map((item) => clone(item));
  }
  if (isPlainObject(target)) {
    let obj = {};
    Object.keys(target).forEach((key) => {
      obj[key] = clone(target[key]);
    });

    return obj;
  }

  return target;
};
/**
 * 判定是否是对象
 */
export const isPlainObject = (arg) => {
  return arg && typeof arg === "object" && !Array.isArray(arg);
};
