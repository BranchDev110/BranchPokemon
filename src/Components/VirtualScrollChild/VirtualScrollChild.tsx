import { useInView } from "react-intersection-observer";

const VirtualScrollChild = ({children} : any) => {
    const {ref, inView} = useInView();
    return (
        <div ref={ref} style={{width: '20%', height: '450px'}}>
            {
                inView ? children : null
            }
        </div>
    )
}

export default VirtualScrollChild;