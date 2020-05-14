const validate = require('validate.js');

// 自定義validate array
validate.validators.arrayValidation = (arrayItems, itemType) => {
  const typeArr = ['string', 'number', 'integer', 'boolean', 'array'];
  if (!typeArr.includes(itemType)) {
    return 'Input type undefined';
  }
  const funcName = `is${itemType[0].toUpperCase()}${itemType.substring(1)}`;
  if (arrayItems) {
    for (const item of arrayItems) {
      const result = validate[funcName](item);
      if (!result) {
        return 'Type incorrect';
      }
    }
  }
  return null;
}

// 自定義validate array of object
validate.validators.arrayObjectValidation = (arrayItems, itemConstraints) => {
  if (arrayItems) {
    for (const item of arrayItems) {
      const result = validate(item, itemConstraints)
      if (result) {
        return result;
      }
    }
  }
  return null;
}