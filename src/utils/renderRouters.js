import React from 'react';
import { Route } from "react-router-dom";

// 根据路由配置实现 Route 渲染
// 这里使用了箭头函数, 省去了很多的 return
/** 这里返回的其实就是要渲染的 Route 列表，大概是像这样子(示意)
* [<Route/>, <Route/>...]
* 就是用下面的函数代替了手动写 Route
*/
export const renderRoutes = (routerConfig) =>
    // 将需要用到的属性component,children解构出来,其他直接根据配置渲染到 Route 上
    (routerConfig || []).map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            element={<route.component child={route.children} ></route.component>}
          >
            {
              route.children ? childRouterRender(route.children) : null
            }
          </Route>
        )
    )

    const childRouterRender = (children) => (
        children.map((child) => (
          <Route
            key={child.path}
            path={child.path}
            exact={child.exact}
            element={<child.component />}
          >
            {
              child.children ? childRouterRender(child.children) : null
            }
          </Route>
        ))
      )
      