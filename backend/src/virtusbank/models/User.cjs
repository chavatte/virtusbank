const { EntitySchema } = require("typeorm");

const User = new EntitySchema({
  name: "User",
  columns: {
    id: {
      type: "uuid",
      primary: true,
      generated: "uuid",
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    accountNumber: {
      type: Number,
    },
    accountDigit: {
      type: Number,
    },
    wallet: {
      type: "decimal",
      precision: 10,
      scale: 2,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
});

module.exports = User;
