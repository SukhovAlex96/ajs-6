export default function orderByProps(obj, order) {
  const inputObject = { ...obj };
  const result = [];

  for (const prop in order) {
    if (Object.prototype.hasOwnProperty.call(inputObject, order[prop])) {
      result.push({ key: order[prop], value: obj[order[prop]] });
      delete inputObject[order[prop]];
    } else {
      throw new Error(`Пераметр ${order[prop]} не существет`);
    }
  }

  const keysOrderInRest = Object.keys(inputObject);

  if (keysOrderInRest.length > 0) {
    keysOrderInRest.sort();
    keysOrderInRest.forEach((item) => {
      result.push({ key: item, value: obj[item] });
    });
  }
  return result;
}
