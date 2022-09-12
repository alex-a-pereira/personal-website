/**
 * NOTE:
 * This file is a work around to satisfy the TS compile for static file imports.
 * E.g. you can import an PNG directly in react code to use as `source` prop on Image component
 */

declare module '*.png' {
  const value: any // eslint-disable-line @typescript-eslint/no-explicit-any
  export default value
}

declare module '*.svg' {
  const value: any // eslint-disable-line @typescript-eslint/no-explicit-any
  export default value
}

declare module '*.jpg' {
  const value: any // eslint-disable-line @typescript-eslint/no-explicit-any
  export default value
}

declare module '*.gif' {
  const value: any // eslint-disable-line @typescript-eslint/no-explicit-any
  export default value
}
