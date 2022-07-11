import './styles'
type Props = {
    width: number | string,
    height: number | string,
    borderRadius?: number,
}

function Skeleton({ width, height, borderRadius }: Props) {
    return(
        <div className='skeleton' style={{ width, height, borderRadius }} />
    )
}

export default Skeleton;