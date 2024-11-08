import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema(
  {
    records: {
      type: String,
      required: true,
    },
    refer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
    },
  },
  {
    timestamps: true,
  }
);

export const MedicalRecord = mongoose.model(
  'MedicalRecord',
  medicalRecordSchema
);
