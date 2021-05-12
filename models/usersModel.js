const users = (db, dtype) => {
  return db.define("users", {
    fullname: {
      type: type.STRING,
      allowNull: false,
    },
  });
};
