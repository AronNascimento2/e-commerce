import * as S from './styles'

type Props = {
  children?: React.ReactNode
  className?: string
}
export const Card: React.FC<Props> = ({ children, className }) => {
  return <S.Container className={className}>{children}</S.Container>
}
