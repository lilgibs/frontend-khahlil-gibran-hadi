type TProps = {
  rows?: number
  columns?: number
}

export default function TRSkeleton({ rows = 5, columns = 3 }: TProps) {
  return (
    <>
      {Array.from({ length: rows }, (_, i) => (
        <tr key={`row-${i}`}>
          {Array.from({ length: columns }, (_, j) => (
            <td key={`cell-${i}-${j}`}>
              <div className="animate-pulse">
                <div className="h-[20px] w-full bg-gray-300 rounded-lg" />
              </div>
            </td>
          ))}
        </tr>
      ))}
    </>
  )
}
