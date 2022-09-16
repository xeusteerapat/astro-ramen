import { createSignal, onCleanup, For } from 'solid-js';
import type { JSX, Component } from 'solid-js';

const RamenList: Component = props => {
  return (
    <div>
      <For each={props.ramens.shops} fallback={<div>Loading...</div>}>
        {shop => <li>{shop.name}</li>}
      </For>
    </div>
  );
};

export default RamenList;
