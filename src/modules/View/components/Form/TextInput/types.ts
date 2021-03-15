export interface TextInputProps {
    label: string
    value: string | number
    type?: string
    onChange?: (event: any) => void
}