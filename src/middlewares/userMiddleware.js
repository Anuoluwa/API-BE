import { failure } from '../helpers/response';
//import { bvnChecker } from '../../services/bvnService/bvnCheckerService';
import { getFullWalletDetails } from '../bankingservices/oneWallet/oneWalletService';

/**
 * check if entrepreneur bvn exist
 * @method bvnExist
 * @param {object} req request
 * @param {object} res response
 * @returns {object} API response
 */
// export const bvnExists = async (req, res, next) => {
//   const { bvnNumber } = req.params;
//   const result = await bvnChecker(bvnNumber);
// };
