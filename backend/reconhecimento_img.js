import { ImageResizer } from 'react-native-image-resizer';
import { GoogleGenerativeAI } from  '@google/generative-ai';

function redimensionaImg(img) {
  const { width: larg, height: alt } = img;

  const novaLarg = larg / 2;
  const novaAlt = alt / 2;

  return ImageResizer.createResizedImage(img.uri, novaLarg, novaAlt, 'JPEG', 80);
}

export default async function verificaERedimensiona(img) {
  const { width: larg, height: alt } = img;

  if (larg >= 3600 || alt >= 2000) {
    return await redimensionaImg(img);
  } else {
    return img;
  }
}

const source = 'baixados.png';
const imgOriginal = { uri: source };
verificaERedimensiona(imgOriginal)
  .then(imgProcessada => {
    //precisa inserir o codigo da IA aki
  })
  .catch(error => {
    console.error('Erro ao redimensionar a imagem:', error);
  });
