import { admin as adminContent } from "./en/admin"
import { overrides } from "./overrides/copy"
import { problem as problemContent } from "./en/problem"
import { terms as termsContent } from "./terms"
import { title as titleContent } from "./en/title"

export const admin = {
  ...adminContent,
  ...overrides.admin,
}

export const problem = {
  ...problemContent,
  ...overrides.problem,
}

export const terms = termsContent

export const title = {
  ...titleContent,
  ...overrides.title,
}
