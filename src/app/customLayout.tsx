import { ILayout } from '@/app/types';


const Layout = ({ children, isPending }: ILayout) => {
    return <div style={{
        opacity: isPending ? 0.5 : 1
    }}>{children}</div>
}

export default Layout;