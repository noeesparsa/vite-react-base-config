import type CustomMatchers from "jest-extended";
import "vitest";

declare module "vitest" {
  type Assertion<T = unknown> = NonNullable<unknown> & CustomMatchers<T>;

  type AsymmetricMatchersContaining<T = unknown> = NonNullable<unknown> &
    CustomMatchers<T>;

  type ExpectStatic = NonNullable<unknown> & CustomMatchers<T>;
}
