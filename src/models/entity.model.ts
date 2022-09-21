import mongoose, { Schema, Types, model, Model } from "mongoose";
import { Entity } from "../interfaces/entity";

const EntitySchema = new Schema<Entity>(
  {
    name: {
      type: Schema.Types.String,
    },
    powers: {
      type: Schema.Types.Mixed,
    },
  },
  {
    versionKey: false,
  }
);

const EntityModel = model("entity", EntitySchema);
export default EntityModel;
