interface Window {
  particlesJS: (id: string, config: any) => void;
}

declare module "particles.js/particles" {
  export default function particlesJS(id: string, config: any): void;
}
