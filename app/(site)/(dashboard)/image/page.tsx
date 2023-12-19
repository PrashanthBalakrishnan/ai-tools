import Heading from "@/components/Heading";
import { Image } from "lucide-react";
const ImagePage = () => {
  return (
    <section>
      <Heading
        title="Image Generation"
        desc="Create images using AI prompts."
        icon={Image}
        iconColor="text-red-500"
        bgColor="bg-red-500/10"
      />
    </section>
  );
};
export default ImagePage;
