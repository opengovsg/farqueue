import { Auditable } from '@common/core/types'
import { DecryptedContent } from '@opengovsg/formsg-sdk/dist/types'
import { Client, Institution, Patient, User } from 'modules/database/entities'

import { User } from '../database/entities'

declare module 'express' {
  export interface Request {
    user?: User
    apiClient?: Client
    auditData?: Auditable<any>
    skipAudit?: boolean
    // only available for PatientGuard decorated routes as of 25 August 2022
    patient?: Patient
    formsgSubmission?: DecryptedContent
    institution?: Institution
  }
}
