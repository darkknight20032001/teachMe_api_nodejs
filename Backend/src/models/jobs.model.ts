// jobs-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from "../declarations";
import { Model, Mongoose } from "mongoose";

export default function (app: Application): Model<any> {
  const modelName = "jobs";
  const mongooseClient: Mongoose = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      schoolId: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
      name:{
        type: String,
        required: true,
      }, 
      description: {
        perks : {
        type: String,
        required: true,
        },
        requirements: {
          type: String,
        required: true,
        },
        salary: {
          type: String,
        required: true,
        },
      },
      
      // scheduled: {
      //   type: String,
      //   required: true,
      //   //  ["NULL","Allot time"]
      // },
      // status: {
      //   schoolStatus: {
      //     type: String,
      //     enum: ["Selected", "Rejected", "Pending"],
      //     required: true,
      //   },
       
      //   applicantStatus: {
      //     type: String,
      //     enum: ["Select", "Reject"],
      //     required: true,
      //   },
      // },
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