const Admin = require("../../models").admins;

const findAdminByToken = async (token) => {
  const result = await Admin.findOne({
    where: {
      jwt: token,
    },
  });
  return result.id;
};
module.exports = {
  findAdminByToken,
};
