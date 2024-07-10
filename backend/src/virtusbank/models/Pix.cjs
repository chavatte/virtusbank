const { EntitySchema } = require("typeorm");

const Pix = new EntitySchema({
  name: "Pix",
  columns: {
    id: {
      type: "uuid",
      primary: true,
      generated: "uuid",
    },
    status: {
      type: String,
    },
    value: {
      type: "decimal",
      precision: 10,
      scale: 2,
    },
    createdAt: {
      type: Date,
      createDate: true,
    },
    updatedAt: {
      type: Date,
      updateDate: true,
    },
  },
  relations: {
    requestingUser: {
      target: "User",
      type: "many-to-one",
      joinColumn: true,
      inverseSide: "pixRequests",
    },
    payingUser: {
      target: "User",
      type: "many-to-one",
      joinColumn: true,
      inverseSide: "pixPayments",
      nullable: true,
    },
  },
});

module.exports = Pix;
