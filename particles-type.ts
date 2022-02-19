export interface Root {
  particles: Particles;
  interactivity: Interactivity;
  retina_detect: boolean;
}

export interface Particles {
  number: Number;
  color: Color;
  shape: Shape;
  opacity: Opacity;
  size: Size;
  line_linked: LineLinked;
  move: Move;
}

export interface Number {
  value: number;
  density: Density;
}

export interface Density {
  enable: boolean;
  value_area: number;
}

export interface Color {
  value: string;
}

export interface Shape {
  type: string;
  stroke: Stroke;
  polygon: Polygon;
  image: Image;
}

export interface Stroke {
  width: number;
  color: string;
}

export interface Polygon {
  nb_sides: number;
}

export interface Image {
  src: string;
  width: number;
  height: number;
}

export interface Opacity {
  value: number;
  random: boolean;
  anim: Anim;
}

export interface Anim {
  enable: boolean;
  speed: number;
  opacity_min: number;
  sync: boolean;
}

export interface Size {
  value: number;
  random: boolean;
  anim: Anim2;
}

export interface Anim2 {
  enable: boolean;
  speed: number;
  size_min: number;
  sync: boolean;
}

export interface LineLinked {
  enable: boolean;
  distance: number;
  color: string;
  opacity: number;
  width: number;
}

export interface Move {
  enable: boolean;
  speed: number;
  direction: string;
  random: boolean;
  straight: boolean;
  out_mode: string;
  bounce: boolean;
  attract: Attract;
}

export interface Attract {
  enable: boolean;
  rotateX: number;
  rotateY: number;
}

export interface Interactivity {
  detect_on: string;
  events: Events;
  modes: Modes;
}

export interface Events {
  onhover: Onhover;
  onclick: Onclick;
  resize: boolean;
}

export interface Onhover {
  enable: boolean;
  mode: string;
}

export interface Onclick {
  enable: boolean;
  mode: string;
}

export interface Modes {
  grab: Grab;
  bubble: Bubble;
  repulse: Repulse;
  push: Push;
  remove: Remove;
}

export interface Grab {
  distance: number;
  line_linked: LineLinked2;
}

export interface LineLinked2 {
  opacity: number;
}

export interface Bubble {
  distance: number;
  size: number;
  duration: number;
  opacity: number;
  speed: number;
}

export interface Repulse {
  distance: number;
  duration: number;
}

export interface Push {
  particles_nb: number;
}

export interface Remove {
  particles_nb: number;
}
