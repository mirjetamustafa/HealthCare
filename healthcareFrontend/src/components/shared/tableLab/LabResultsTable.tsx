import Eye from '../../../assets/eye.svg?react'
import EyeOff from '../../../assets/eyeOff.svg?react'
import Download from '../../../assets/download.svg?react'
import type { LabResult } from './types'
import Button from '../Button/Button'
import StatusBadge from './StatusBadge'
import { useState } from 'react'

interface Props {
  data: LabResult[]
}

const LabResultsTable: React.FC<Props> = ({ data }) => {
  const [visibleRows, setVisibleRows] = useState<Record<string, boolean>>({})

  const toggleVisibility = (id: string) => {
    setVisibleRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left text-gray-500 text-sm border-b border-gray-200">
            <th className="pb-3">Test Name</th>
            <th className="pb-3">Date</th>
            <th className="pb-3">Status</th>
            <th className="pb-3">Result</th>
            <th className="pb-3 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => {
            const isVisible = visibleRows[item.id]
            return (
              <tr className="border-b border-gray-100 last:border-none">
                <td className="py-4 font-medium text-gray-800">
                  {item.testName}
                </td>
                <td className="py-4 text-gray-600">{item.date}</td>
                <td className="py-4">
                  <StatusBadge status={item.status} />
                </td>
                <td className="py-4">
                  {item.result ? (isVisible ? item.result : '••••••') : '—'}
                </td>
                <td className="py-3 text-right">
                  {item.status === 'Completed' && (
                    <div className="flex justify-end gap-4">
                      {isVisible ? (
                        <Button onClick={() => toggleVisibility(item.id)}>
                          <EyeOff className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                        </Button>
                      ) : (
                        <Button onClick={() => toggleVisibility(item.id)}>
                          <Eye className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                        </Button>
                      )}

                      <Button>
                        <Download className="w-4 h-4 hover:text-blue-600 text-gray-400" />
                      </Button>
                    </div>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default LabResultsTable
