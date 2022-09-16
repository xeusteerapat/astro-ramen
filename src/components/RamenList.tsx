import type { Component } from 'solid-js';
import { For } from 'solid-js';
import type { RootRamen } from '../types/ramens';

const RamenList: Component<RootRamen> = props => {
  return (
    <div>
      <For each={props.ramens.shops} fallback={<div>Loading...</div>}>
        {shop => <li>{shop.name}</li>}
      </For>
    </div>
  );
};

export default RamenList;
