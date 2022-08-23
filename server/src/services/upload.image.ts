// code to upload images to cloudinary cloud
import { v2 as cloudinary } from "cloudinary";
import {
  cloud_name,
  api_key,
  api_secret,
} from "../config/variablesEnviroment/dotenv";
import fs from "fs-extra";

cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
  secure: true,
});

interface Return {
  response: boolean;
  img_url?: string;
  img_id?: string;
}

export default async function uploadImages(file_path: string): Promise<Return> {
  try {
    const image = await cloudinary.uploader.upload(file_path);
    setTimeout(async () => {
      await fs.remove(file_path);
    }, 10000);

    return {
      response: true,
      img_url: image.secure_url,
      img_id: image.public_id,
    };
  } catch (err) {
    setTimeout(async () => {
      await fs.remove(file_path);
    }, 10000);

    return { response: false, img_id: "", img_url: "" };
  }
}
