import light from "./light"
import dark from "./dark"

export interface Theme {
  backgroundPrimary: string
  backgroundSecondary: string
  backgroundTertiary: string

  textPrimary: string
  textSecondary: string
  textTertiary: string
  textHyperlink: string
}

export default { light, dark }
