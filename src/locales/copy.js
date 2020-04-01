import { overrides } from "./overrides/copy"
import { log as logContent } from "./en/log"
import { forms as formsContent } from "./en/forms"
import { meal as mealContent } from "./en/meal"
import { medication as medicationContent } from "./en/medication"
import { supplement as supplementContent } from "./en/supplement"
import { shared as sharedContent } from "./en/shared"
import { snack as snackContent } from "./en/snack"
import { terms as termsContent } from "./terms"
import { title as titleContent } from "./en/title"

export const forms = {
  ...formsContent,
  ...overrides.forms,
}

export const log = {
  ...logContent,
  ...overrides.log,
}

export const meal = {
  ...mealContent,
  ...overrides.meal,
}

export const medication = {
  ...medicationContent,
  ...overrides.medication,
}

export const snack = {
  ...snackContent,
  ...overrides.snack,
}

export const supplement = {
  ...supplementContent,
  ...overrides.supplement,
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
