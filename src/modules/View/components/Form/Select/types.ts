export interface SelectProps {
    label: string
    selectTitle: string
    value: string
    options: {
        id: string
        value: string
    }[]
    onChange?: (event: any) => void
}