export default interface NavigationProps {
  navigation: {
    navigate?: (whereTo: string, data?: any) => void
    pop?: () => void
    goBack?: () => void
    dismiss?: () => void
    getParam?: (param: string, defaultValue?: any) => any
  }
}
