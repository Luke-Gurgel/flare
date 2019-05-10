import light from "./light"
import dark from "./dark"

export interface Theme {
  brandPrimary: string

  backgroundPrimary: string
  backgroundSecondary: string
  backgroundTertiary: string

  textPrimary: string
  textSecondary: string
  textTertiary: string
  textHyperlink: string

  softButtonBackground: string
  softButtonText: string
}

export default { light, dark }
