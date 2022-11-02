/**
 * Check page permission for given module
 * @param {String|Number} num - Number
 * @param {Number} [roundOff] - Number to round off : Default is 2
 * @return {Number} number - Number fixed to roundoff (12.NN)
 */
 export const roundOff = (num, roundOff = 2) => {
  try {
    return parseFloat(parseFloat(num || 0).toFixed(roundOff));
  } catch (error) {
    return num;
  }
};

/**
 * Check permission for given action & module
 * @param {String} moduleName - name of the module (i.e user, product, etc)
 * @param {String} action - name of the action (i.e. product_create, product_update, ect )
 * @return {Boolean} true if permission is granted, false otherwise
 */
export const isActionPermitted = (moduleName, action, permissions) => {
  return true;
  //   try {
  //     if ((permissions && permissions.length === 0) || !action || !moduleName) {
  //       return false;
  //     }
  //     let result = permissions[moduleName]?.find(
  //       (permission) => permission.name === action
  //     );
  //     return !!result;
  //   } catch (error) {
  //     return false;
  //   }
};

/**
 * Check page permission for given module
 * @param {String} moduleName - name of the module (i.e user, product, etc)
 * @return {Boolean} true if page permission is granted, false otherwise
 */
export const isPageAccessAllowed = (moduleName, permissions) => {
  return true;
  //   if ((permissions && permissions.length === 0) || !moduleName) {
  //     return false;
  //   }
  //   try {
  //     let result = permissions?.find(
  //       (permission) => permission.module === moduleName
  //     );
  //     return !!result;
  //   } catch (error) {
  //     return false;
  //   }
};

export const getDefaultRoute = () => {
  return "/";
};
