import { createSignal, onCleanup } from 'solid-js';
import type { JSX, Component } from 'solid-js';

const RamenList: Component = props => {
  return (
    <div>
      {props.ramens.shops.map((shop: any) => {
        return <li>{shop.name}</li>;
      })}
    </div>
  );
};

export default RamenList;
