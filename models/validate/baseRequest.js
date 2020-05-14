const validate = require('validate.js');
class BaseRequest {
  constructor(jsonData) {
    if (jsonData) {
      Object.keys(jsonData).forEach(p => {
        this[p] = jsonData[p];
      });
    }
  }

  convertStringToInt(keys) {
    keys.forEach(key => {
      this[key] = parseInt(this[key]);
    });
  }

  setDefaultProperties(propArray) {
    propArray.forEach(p => {
      if (!this.hasOwnProperty(p.columnName)) {
        this[p.columnName] = p.defaultValue;
      }
    });
  }

  handleErrMsg(errMsgObj) {
    for (let col in errMsgObj) {
      return errMsgObj[col][0];
    }
  }

}
module.exports = BaseRequest;