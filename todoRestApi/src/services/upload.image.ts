// code to upload images to cloudinary cloud
import { v2 as cloudinary } from "cloudinary";
import {
  cloud_name,
  api_key,
  api_secret,
} from "../config/variablesEnviroment/dotenv";
cloudinary.config({
  secure: true,
  api_key,
  api_secret,
  cloud_name,
});

interface Return {
  response: boolean;
  img_url?: string;
  img_id?: string;
}

interface ReturnMulter {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

export default async function uploadImages(
  file_info: ReturnMulter
): Promise<Return> {
  try {
    const image = await cloudinary.uploader.upload(file_info.path);
    return {
      response: true,
      img_url: image.secure_url,
      img_id: image.public_id,
    };
  } catch (err) {
    console.warn(err);
    return { response: false, img_id: "", img_url: "" };
  }
}
