const users = (db, dtype) => {
  return db.define("users", {
    fullname: {
      type: type.STRING,
      allowNull: false,
    },
    password: {
      type: type.STRING,
      allowNull: false,
    },
    email: {
      type: type.STRING,
      allowNull: false,
    },
    img_profile: {
      type: type.STRING,
      allowNull: false,
    },
    link_profile: {
      type: type.STRING,
      allowNull: false,
    },
    fcm: {
      type: type.STRING,
      // allowNull: false,
    },
  });
};
