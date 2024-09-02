export interface navItem {
  label: string;
  path: string;
  onclick: () => void;
}

export interface portfolio {
  image: string;
  title: string;
  label: string;
  tools: string[];
  url: string;
}

export interface skills {
  icon?: JSX.Element;
  text: string;
}
