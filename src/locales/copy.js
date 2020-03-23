import { admin as adminContent } from "./en/admin"
import { overrides } from "./overrides/copy"
import { medication as medicationContent } from "./en/medication"
import { shared as sharedContent } from "./en/shared"
import { terms as termsContent } from "./terms"
import { title as titleContent } from "./en/title"

export const admin = {
  ...adminContent,
  ...overrides.admin,
}

export const medication = {
  ...medicationContent,
  ...overrides.medication,
}

export const terms = termsContent

export const shared = {
  ...sharedContent,
  ...overrides.shared,
}

export const title = {
  ...titleContent,
  ...overrides.title,
}
