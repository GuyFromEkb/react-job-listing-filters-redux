import { useSelector, TypedUseSelectorHook } from "react-redux"
import { RootState } from "../store/store"

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector