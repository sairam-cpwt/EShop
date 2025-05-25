import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  type HTMLAttributes,
  type ReactNode,
  type Ref,
} from "react";
import { useDispatch } from "react-redux";
import type { RootState } from "~/store";

type SliceNames = keyof RootState;

export interface WrapperRef {
  reset: () => void;
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  resetSlice?: SliceNames | SliceNames[];
  resetOn?: "mount" | "unmount" | "both" | "immediate";
  ref?: Ref<WrapperRef>;
}

export const Wrapper = ({
  children,
  resetSlice,
  resetOn,
  ref,
  ...rest
}: Props) => {
  const dispatch = useDispatch();

  const slice = useMemo(
    () => (Array.isArray(resetSlice) ? resetSlice : [resetSlice]),
    [resetSlice]
  );

  const reset = useCallback(() => {
    slice.forEach((slice) => {
      if (slice) {
        dispatch({ type: `${slice}/reset` });
      }
    });
  }, [dispatch, slice]);

  useImperativeHandle(ref, () => ({
    reset: reset,
  }));

  useEffect(() => {
    if (!resetSlice) return;

    if (resetOn === "immediate") {
      reset();
    }

    if (resetOn === "both" || resetOn === "mount") {
      reset();
    }

    return () => {
      if (resetOn === "both" || resetOn === "unmount") {
        reset();
      }
    };
  }, [resetOn, resetSlice, reset]);

  return (
    <>
      <div {...rest}>{children}</div>
    </>
  );
};
