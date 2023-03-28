// job-status-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from "../declarations";
import { Model, Mongoose } from "mongoose";

export default function (app: Application): Model<any> {
  const modelName = "jobStatus";
  const mongooseClient: Mongoose = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      jobId: {
        type: Schema.Types.ObjectId,
        ref: "jobs",
      },
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
      createdFor: {
        type: Schema.Types.ObjectId,
        ref: "form-applicant",
      },
      status: {
        type: String,
        required: true,
        enum: ["Accepted", "Rejected", "Pending"],
      },
      review: {
        type: String,
        required: true,
        enum: ["1", "2", "3", "4", "5"],
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
