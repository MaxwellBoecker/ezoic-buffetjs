var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * InputNumber
 *
 */
import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
import img from '../../assets/icons/icon_select.svg'; // TODO

var InputNumber = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  /* stylelint-disable */\n  .rc-input-number {\n    margin: 0;\n    padding: 0;\n    line-height: 26px;\n    font-size: 12px;\n    height: 26px;\n    display: inline-block;\n    vertical-align: middle;\n    border: 1px solid #d9d9d9;\n    border-radius: 4px;\n    transition: all 0.3s;\n  }\n  .rc-input-number-focused {\n    border-color: #1890ff;\n    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n  }\n  .rc-input-number-handler {\n    text-align: center;\n    line-height: 12px;\n    height: 12px;\n    overflow: hidden;\n    display: block;\n    -ms-touch-action: none;\n    touch-action: none;\n  }\n  .rc-input-number-handler-up-inner,\n  .rc-input-number-handler-down-inner {\n    color: #666666;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-user-select: none;\n  }\n  .rc-input-number:hover {\n    border-color: #1890ff;\n  }\n  .rc-input-number:hover .rc-input-number-handler-up,\n  .rc-input-number:hover .rc-input-number-handler-wrap {\n    border-color: #1890ff;\n  }\n  .rc-input-number-disabled:hover {\n    border-color: #d9d9d9;\n  }\n  .rc-input-number-disabled:hover .rc-input-number-handler-up,\n  .rc-input-number-disabled:hover .rc-input-number-handler-wrap {\n    border-color: #d9d9d9;\n  }\n  .rc-input-number-input-wrap {\n    overflow: hidden;\n    height: 100%;\n  }\n  .rc-input-number-input {\n    width: 100%;\n    text-align: center;\n    outline: 0;\n    -moz-appearance: textfield;\n    line-height: 26px;\n    height: 100%;\n    transition: all 0.3s ease;\n    color: #666666;\n    border: 0;\n    border-radius: 4px;\n    padding: 0;\n    transition: all 0.3s;\n  }\n  .rc-input-number-handler-wrap {\n    float: right;\n    border-left: 1px solid #d9d9d9;\n    width: 20px;\n    height: 100%;\n    transition: all 0.3s;\n  }\n  .rc-input-number-handler-up {\n    border-bottom: 1px solid #d9d9d9;\n    padding-top: 1px;\n    transition: all 0.3s;\n  }\n  .rc-input-number-handler-up-inner:after {\n    content: '+';\n  }\n  .rc-input-number-handler-down {\n    transition: all 0.3s;\n  }\n  .rc-input-number-handler-down-inner:after {\n    content: '-';\n  }\n  .rc-input-number-handler-down-disabled,\n  .rc-input-number-handler-up-disabled {\n    opacity: 0.72;\n  }\n  .rc-input-number-handler-down-disabled:hover,\n  .rc-input-number-handler-up-disabled:hover {\n    color: #999;\n    border-color: #d9d9d9;\n  }\n  .rc-input-number-disabled .rc-input-number-input {\n    opacity: 0.72;\n    cursor: not-allowed;\n    background-color: #f3f3f3;\n  }\n  .rc-input-number-disabled .rc-input-number-handler {\n    opacity: 0.72;\n  }\n  .rc-input-number-disabled .rc-input-number-handler:hover {\n    color: #999;\n    border-color: #d9d9d9;\n  }\n\n  // Custom style\n  .rc-input-number.inputNumber {\n    width: 100%;\n    height: ", ";\n    background-color: ", ";\n    border: 0;\n    box-shadow: none;\n    position: relative;\n    input {\n      width: 100%;\n      height: 100%;\n      border: 1px solid ", ";\n      padding: 0 ", ";\n      cursor: pointer;\n      outline: 0;\n      padding-right: calc(", " + ", ");\n      border-radius: ", ";\n      text-align: left;\n      font-weight: ", ";\n      font-size: 1.3rem;\n      color: ", ";\n\n      &::-webkit-input-placeholder {\n        color: ", ";\n      }\n      &:focus {\n        border-color: ", ";\n      }\n      &:disabled {\n        cursor: not-allowed;\n        background-color: ", ";\n        color: ", ";\n        opacity: 1;\n      }\n    }\n    .rc-input-number-handler-wrap {\n      width: 24px;\n      position: absolute;\n      right: 0;\n      top: 0;\n      background-image: url(", ");\n      background-repeat: no-repeat;\n      background-position: right;\n      border: none;\n      cursor: pointer;\n      span {\n        height: 50%;\n        border: 0;\n        span {\n          color: transparent;\n        }\n      }\n    }\n  }\n  input[type='number']::-webkit-inner-spin-button,\n  input[type='number']::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n"])), sizes.input.height, colors.white, colors.lightGrey, sizes.input.padding, sizes.input.height, sizes.input.padding, sizes.borderRadius, sizes.fontWeight.regular, colors.blueTxt, colors.greyPlaceholder, colors.blueBorder, colors.greyIconBkgd, colors.brightGrey, img);
export default InputNumber;