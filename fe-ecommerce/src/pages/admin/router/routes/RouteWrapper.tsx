import type { ComponentType, LazyExoticComponent, ReactNode } from "react";

// Better type definitions
type PageComponent = ComponentType<Record<string, unknown>>;
type LazyPageComponent = LazyExoticComponent<PageComponent>;
type LayoutComponent = ComponentType<{ children: ReactNode }>;

interface RouteWrapperProps {
  Element: PageComponent | LazyPageComponent;
  Layout?: LayoutComponent;
}

// Simple and clean route wrapper with better type safety
export const RouteWrapper = ({ Element, Layout }: RouteWrapperProps) => {
  if (Layout) {
    return (
      <Layout>
        <Element />
      </Layout>
    );
  }

  return <Element />;
};
