/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import assign from 'shared/assign';

// * 处理组件默认 Props
export function resolveDefaultProps(Component: any, baseProps: Object): Object {
  if (Component && Component.defaultProps) {
    // Resolve default props. Taken from ReactElement
    // * 拷贝 props 副本
    const props = assign({}, baseProps);
    // * 获取组件上定义的 default props
    const defaultProps = Component.defaultProps;
    // * 判定是否应用默认 props：若组件 props 没有显示定义对应的字段，则赋值 defaultProps
    for (const propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
    return props;
  }
  return baseProps;
}
