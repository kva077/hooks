import React, { cloneElement } from "react";
import CollapseWrapper from "../common/collapse";
const ChildrenExercise = () => {
  return (
    <CollapseWrapper title="Упражнение">
      <p className="mt-3">
        У вас есть компоненты Списка. Вам необходимо к каждому из них добавить
        порядковый номер, относительно того, как они располагаются на странице.
        Вы можете использовать как <code>React.Children.map</code> так и{" "}
        <code>React.Children.toArray</code>
      </p>
      <Wrap>
        <Component />
        <Component />
        <Component />
      </Wrap>
    </CollapseWrapper>
  );
};

const Wrap = ({ children }) => {
  return React.Children.map(children, (child) => {
    const config = {
      ...child.props,
      num: children.indexOf(child) + 1,
    };

    return React.cloneElement(child, config);
  });
};

const Component = ({ num }) => {
  return <div>{num}. Компонент списка</div>;
};

export default ChildrenExercise;
