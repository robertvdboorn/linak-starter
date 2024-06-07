import {  ComponentProps, UniformRichText, UniformText, registerUniformComponent } from "@uniformdev/canvas-react";

type Asset = {
  fields: {
    url: {
        value: string;
    }
  }
};

type HeroProps = ComponentProps<{
  title: string;
  description?: string;
  image?: Asset[];
}>;

const Hero: React.FC<HeroProps> = ({ title, description, image }) => (
   <div className="feature-container">
  {image && image.length > 0 && (
    <img src={image[0].fields.url.value} alt="Feature image" className="feature-image" />
  )}
  <div className="text-container">
    <UniformText
      className="title"
      parameterId="title"
      as="h1"
      data-test-id="feature-title"
      placeholder="Feature title goes here"
    />
    <UniformRichText
      parameterId="description"
      className="description"
      data-test-id="feature-description"
    />
  </div>
</div>
);

export default Hero;

registerUniformComponent({ type: "hero", component: Hero })