const validate = require('validate.js');
const BaseRequest = require('../baseRequest.js');

class getAllRamenRatesRequest extends BaseRequest {
  constructor(jsonData) {
    super(jsonData);
  }

  validate() {
    // 先將queryString的特定欄位轉為int再做validation
    this.convertStringToInt(['limit', 'offset']);
    const constraints = {
      orderBy: {
        presence: {
          allowEmpty: false,
        },
        type: 'string',
        inclusion: {
          within: ['visitDate' , 'overallRate']
        }
      },
      limit: {
        presence: false,
        type: 'integer',
        numericality: {
          greaterThanOrEqualTo: 0,
          lessThanOrEqualTo: 99,
        }
      },
      offset: {
        presence: false,
        type: 'integer',
        numericality: {
          greaterThanOrEqualTo: 0,
        }
      }
    };
    const errMsgObj = validate(this, constraints);

    if (errMsgObj) {
      console.log(errMsgObj);
      return {
        pass: false,
        err: this.handleErrMsg(errMsgObj),
      };
    } else {
      // 針對非必填的欄位，判斷Request是否有傳送，如果沒有則補上預設值，以便後續API流程使用
      this.setDefaultProperties([
        {
          columnName: 'limit',
          defaultValue: 99
        },
        {
          columnName: 'offset',
          defaultValue: 0
        }
      ]);
      return {
        pass: true,
      };
    }
  }
}

module.exports = getAllRamenRatesRequest;