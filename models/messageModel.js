module.exports = (db, type) => {
  return db.define("message", {
    message: {
      type: type.STRING,
      allowNull: false,
    },
  });
};
