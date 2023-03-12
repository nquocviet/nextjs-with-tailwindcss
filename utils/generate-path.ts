type _PathParam<Path extends string> = Path extends `${infer L}/${infer R}`
  ? _PathParam<L> | _PathParam<R>
  : Path extends `${string}:${infer Param}`
  ? Param
  : never

type PathParam<Path extends string> = Path extends '*'
  ? '*'
  : Path extends `${infer Rest}/*`
  ? '*' | _PathParam<Rest>
  : _PathParam<Path>

export const generatePath = <Path extends string>(
  path: Path,
  params: {
    [key in PathParam<Path>]: string
  } = {} as any
): string => {
  return path
    .replace(/:(\w+)/g, (_, key: PathParam<Path>) => {
      return params[key]!
    })
    .replace(/(\/?)\*/, (_, prefix, __, str) => {
      const star = '*' as PathParam<Path>

      if (params[star] == null) {
        return str === '/*' ? '/' : ''
      }

      return `${prefix}${params[star]}`
    })
}
