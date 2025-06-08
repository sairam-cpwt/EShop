import React, { LazyExoticComponent, ComponentType } from "react";
import { RouteObject as RRRouteObject } from "react-router-dom";

export type LayoutComponentType = ComponentType<{ children: React.ReactNode }>;
export interface AppRouteObject
  extends Omit<RRRouteObject, "element" | "Component" | "children" | "path"> {
  path: string; // Making path mandatory for our top-level definitions
  Component?: LazyExoticComponent<ComponentType<any>> | ComponentType<any>;
  element?: React.ReactNode;
  layout?: LayoutComponentType;
  roles?: string[];
  children?: AppRouteObject[];
}
