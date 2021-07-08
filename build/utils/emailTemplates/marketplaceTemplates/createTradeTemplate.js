"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* eslint-disable no-new-wrappers */

/**
 * Template for new trade or enlisting
 * @param {string} url URL trade
 * @return {string} new trade template with URL
 */
var _default = function _default(url) {
  return "\n<!DOCTYPE html>\n<html>\n \n<head>\n <meta http-equiv=\"Content-Type\"\n content=\"text/html charset=UTF-8\" />\n <link href=\"https://fonts.googleapis.com/css?family=Montserrat:300,400|Nunito:300,400&display=swap\"\n rel=\"stylesheet\">\n</head>\n \n<body>\n <table style=\"width:750px;height:1035px;background: #F5F5F5 0% 0% no-repeat padding-box;opacity: 1; color: #354052;\">\n <tr style=\"height: 50px;\">\n <td></td>\n <td></td>\n <td></td>\n </tr>\n <tr>\n <td></td>\n <td style=\"width:600px; min-height:680px;background: #FFFFFF;padding:40px;opacity: 1;\">\n <table>\n <tr>\n <td style=\"width:120px; padding-bottom: 40px;\"><img src=\"http://t0.gstatic.com/images?q=tbn:ANd9GcT6PZfyTLrN0fQuzeT9eg21XoNJJm24pyuaGrlVfgGWzjxbxmgh\"\n alt=\"Sterling logo\"\n width=\"120\"></td>\n </tr>\n <tr>\n </tr>\n <tr>\n <td style=\"font-size: 1rem; padding-top: 60px; font-family: 'Montserrat', sans-serif;\">Thank you for enlisting and creating a trade a commodity on <span style=\"font-weight: bold;\">SABEX NG.</span> You will receive notification from us when you have offer. </td> \n </tr>\n <tr>\n <td style=\"padding-top: 10px; font-size: 18px; font-weight: lighter; font-family: 'Montserrat', sans-serif; text-align: left;\">You can click the button below to proceed to your dashboard.</td>\n </tr>\n <tr>\n <td style=\"padding-top: 30px;\">\n <a href=\"".concat(url, "\"\n target=\"_blank\"><button style=\"color: #ffffff !important; background-color: #000000; text-align: center; padding: 17px 70px; letter-spacing: 1.2px; font-size: 12px; border: 0; border-radius: 5px;\">Dashboard</button></a>\n </td>\n </tr>\n </table>\n </td>\n <td></td>\n </tr>\n <tr>\n <td></td>\n <td>\n <table style=\"text-align: center; width: 100%;\">\n <tr>\n <td style=\"font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 30px; letter-spacing: 0;\">We'd love to hear from you!</td>\n </tr>\n <tr>\n <td style=\"font-size: 14px; font-family: 'Montserrat', sans-serif;\">\n Help us improve by sharing your feedback in this short survey.\n </td>\n </tr>\n <tr>\n <td style=\"padding-top: 30px;\"><span style=\"padding: 7px;font-size: 25px;\"><img src=\"https://mcusercontent.com/ba0e9849358e861f16cbd8cff/images/ff70d617-4f02-4950-b1ae-c49ce80dad9f.png\"\n alt=\"Facebook logo\"></span> <span style=\"padding: 7px; font-size: 25px;\"><img src=\"https://mcusercontent.com/ba0e9849358e861f16cbd8cff/images/999fbe47-fd4b-4679-9eff-9cc0301cd523.png\"\n alt=\"Twitter logo\"></span> <span style=\"padding: 7px; font-size: 25px;\"><img src=\"https://mcusercontent.com/ba0e9849358e861f16cbd8cff/images/a8e97e7c-436c-47a0-b28d-53ec9f2922a1.png\"\n alt=\"Instagram logo\"></span></td>\n </tr>\n <tr>\n <td style=\"font-family: 'Montserrat', sans-serif;font-size: 16px; padding-top: 20px;\">\n Copyright &copy; 2020 <span style=\"font-weight: bold !important;\">SABEXNG Commodity Trading.</span> All Rights Reserved.\n </td>\n </tr>\n <tr>\n <td style=\"font-weight: bold; font-size: 16px;\">\n </td>\n </tr>\n </table>\n </td>\n <td></td>\n </tr>\n </table>\n</body>\n \n</html>");
};

exports["default"] = _default;