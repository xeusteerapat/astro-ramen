import type { Component } from 'solid-js';
import type { RamenCardProps } from '../types/ramens';

const RamenList: Component<RamenCardProps> = props => {
  console.log('props ramen card', props);
  return (
    <div>
      <h2>{props.ramen.name}</h2>
      <img
        src={props.ramen.photos[0].url}
        alt={props.ramen.photos[0].name}
        width='400px'
        height='auto'
      />
    </div>
  );
};

export default RamenList;
