// schools-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from "../declarations";
import { Model, Mongoose } from "mongoose";

export default function (app: Application): Model<any> {
  const modelName = "schools";
  const mongooseClient: Mongoose = app.get("mongooseClient");
  const { Schema } = mongooseClient;
 
  const schema = new Schema(
    {
      name: {
        type: String,
        // required: true,
      },
      contact: {
        type: String,
        // required: true,
      },
      administration: {
        head: { type: String },
        principal: { type: String },
        vicePrincipal: { type: String },
        headmaster: { type: String },
        faculty: { type: String },
        // In faculty, we should give the number of faculties in this school.
      },
      address: {
        type: String,
        required: true,
      },

      affiliation: {
        type: String,
        required: true,
      },
      descriptions: {
        type: String,
        // required: true,
      },
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: "users",
       
      },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    (mongooseClient as any).deleteModel(modelName);
  }
  return mongooseClient.model<any>(modelName, schema);
}
