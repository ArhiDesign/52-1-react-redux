export interface AdviceRandomizerSliceState {
    data: string[],
    error: string | undefined,
    status: 'default' | "loading" | "success" | "error"
}