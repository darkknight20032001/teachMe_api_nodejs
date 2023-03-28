// profiles-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from "../declarations";
import { Model, Mongoose } from "mongoose";

export default function (app: Application): Model<any> {
  const modelName = "profiles";
  const mongooseClient: Mongoose = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      dob: {
        type: String,
        // required: true,
      },
      contact: {
        type: String,
        // required: true,
      },
      address: {
        type: String,
        required: true,
      },
      // applicant will describe his professional career
      description: {
        type: String,
        // required: true,
      },
// Resume will be pdf/jpg
      resume: {
        type: String,
         // type will actually be url
        // required: true,
      },
      //upload certificate in pdf/jpg whatever suitable
      achievements: {
        type: String,
        // type will actually be url 
        // required: true,
      },
      // applicant must upload his/her teaching video
      teachingVideo: {
        type: String,
        // type will actually be url
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
