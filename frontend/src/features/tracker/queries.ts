import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'

import { api } from '~/common/api'

import type { FindPatientRes } from '~backend/patient/patient.dto'

export const usePatient = ({ patientId }: { patientId?: string }) => {
  const { data } = useQuery(
    ['patient', patientId],
    () => {
      return api.url(`/patient/${patientId!}`).get().json<FindPatientRes[]>()
    },
    { suspense: true, enabled: !!patientId },
  )

  return {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    events: data!.map((d) => ({
      headerText: d.headerText,
      happenedAt: d.happenedAt ? dayjs(d.happenedAt) : undefined,
    })),
  }
}
