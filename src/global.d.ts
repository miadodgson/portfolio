export { };

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

// imported from Github Issues Comment

import { ThreeElements } from '@react-three/fiber'

declare global {
  namespace React {
    namespace JSX {
        interface IntrinsicElements extends ThreeElements {
        }
    }
  }
}

declare module 'three' {
  interface MeshLineMaterial extends Material {} // If needed for clarity
}

// from chatgpt

import { MeshLineMaterial, MeshLineGeometry } from 'meshline';
import { Object3DNode } from '@react-three/fiber';

import { MeshLineMaterial, MeshLineGeometry } from 'meshline';
import { Object3DNode } from '@react-three/fiber';

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineMaterial: Object3DNode<
      MeshLineMaterial,
      typeof MeshLineMaterial
    > & {
      color?: string;
      lineWidth?: number;
      depthTest?: boolean;
      resolution?: [number, number];
      useMap?: boolean;
      map?: THREE.Texture;
      repeat?: [number, number];
    };

    meshLineGeometry: Object3DNode<
      MeshLineGeometry,
      typeof MeshLineGeometry
    >;
  }
}
