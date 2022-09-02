import VideoEditor from "@/assets/main/videoEditor.svg"
import { validateVideo, videoAccept } from "@/utils/validate"
interface Cards {
    name: string;
    path: string;
    icon: string;
    showUpload: boolean;
    accept?: string;
    multiple?: boolean;
    validate?: (file: File | Array<File>) => Promise<boolean>;
}
const cards: Array<Cards> = [
  {
    name: 'Video Editor',
    path: 'videoEditor',
    icon: VideoEditor,
    showUpload: true,
    accept: videoAccept,
    multiple: false,
    validate: validateVideo
  }
]

export {
  cards
}
