declare module '*.scss' {
  const content: { [key: string]: any }
  export = content
}

declare module '*.svg' {
  const content: any
  export default content
}

type CardBlock = {
  id: number
  img: string
  stat: string
}
