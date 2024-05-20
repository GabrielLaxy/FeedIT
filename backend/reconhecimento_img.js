import { ImageResizer } from 'react-native-image-resizer';
import { GoogleGenerativeAI } from  '@google/generative-ai';

require("dotenv").config();

const API_KEY = process.env.API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

function redimensionaImg(img) {
  const { width: larg, height: alt } = img;

  const novaLarg = larg / 2;
  const novaAlt = alt / 2;

  return ImageResizer.createResizedImage(img.uri, novaLarg, novaAlt, 'PNG', 80);
}

async function verificaERedimensiona(img) {
  const { width: larg, height: alt } = img;

  if (larg >= 3600 || alt >= 2000) {
    return await redimensionaImg(img);
  } else {
    return img;
  }
}

const source = 'baixados.png';
const imgOriginal = { uri: source };
const imgRedimensionada = verificaERedimensiona(imgOriginal);


async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision"});
  
  const prompt = "Write a story about a magic backpack."
  
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}