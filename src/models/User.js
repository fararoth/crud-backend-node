const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true, //corrige los espacios para que este limpio el dato en la bd
      unique: true //asegura de que sea único este dato en la bd
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("User", userSchema);
