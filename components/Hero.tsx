type HeroProps = {
  title: string;
  description?: string;
};

const Hero: React.FC<HeroProps> = (props: HeroProps) => (
  <div>
    <h1>{props.title}</h1>
    <p dangerouslySetInnerHTML={{ __html: props.description }}></p>
  </div>
);

export default Hero;
